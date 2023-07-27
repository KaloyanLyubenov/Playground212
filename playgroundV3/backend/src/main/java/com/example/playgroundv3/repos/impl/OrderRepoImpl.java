package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.repos.OrderRepo;
import com.example.playgroundv3.repos.impl.row_mappers.OrderRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Repository
public class OrderRepoImpl implements OrderRepo {

    private final JdbcTemplate jdbcTemplate;

    public OrderRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int saveOrder(OrderEntity order){
        String sql = """
                INSERT INTO orders(title, user_id, first_name, last_name, email, creator_email, phone_number, format_type_id, media_type_id)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
                """;

        return jdbcTemplate.update(
                sql,
                order.getTitle(),
                order.getUserId(),
                order.getFirstName(),
                order.getLastName(),
                order.getEmail(),
                order.getCreatorEmail(),
                order.getPhoneNumber(),
                order.getFormatTypeID(),
                order.getMediaTypeID());
    }

    public int saveOrderLocations(List<Integer> locationIDs, int orderId){
        String sql = """
                INSERT INTO orders_locations(order_id, location_id)
                VALUES (?, ?);
                """;

        return Arrays.stream(jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                int location_id = locationIDs.get(i);
                ps.setInt(1, orderId);
                ps.setInt(2, location_id);
            }

            @Override
            public int getBatchSize() {
                return locationIDs.size();
            }
        })).sum();
    }

    @Override
    public List<OrderEntity> findAll() {
        String sql = """
            SELECT *
            FROM orders;
            """;

        return jdbcTemplate.query(sql, new OrderRowMapper());
    }

    @Override
    public Optional<OrderEntity> findLastAddedOrder() {
        String sql = """
            SELECT *
            FROM orders
            ORDER BY id DESC 
            LIMIT 1;
            """;

        return jdbcTemplate.query(sql, new OrderRowMapper()).stream().findFirst();
    }

    @Override
    public Optional<OrderEntity> findOrderById(int orderId) {
        String sql = """
                SELECT *
                FROM orders
                WHERE id = ?
                """;

        return this.jdbcTemplate.query(sql, new OrderRowMapper(), orderId).stream().findFirst();
    }

    @Override
    public List<OrderEntity> findAllByOwnerId(int userId) {
        String sql = """
                SELECT id, title, user_id, first_name, last_name, email, creator_email, phone_number, format_type_id, media_type_id
                FROM orders
                WHERE user_id = ?
                """;

        return this.jdbcTemplate.query(sql, new OrderRowMapper(), userId);
    }

    @Override
    public int updateOrder(OrderEntity order) {
        String sql = """
                UPDATE orders
                SET first_name= ?, last_name = ? , email = ?, phone_number = ?, format_type_id = ?, media_type_id = ?
                WHERE id = ?;
                """;

        return jdbcTemplate.update(
                sql,
                order.getFirstName(),
                order.getLastName(),
                order.getEmail(),
                order.getPhoneNumber(),
                order.getFormatTypeID(),
                order.getMediaTypeID(),
                order.getId());
    }

    @Override
    public int removeLocationsWithOrderId(int orderId) {
        String sql = """
                DELETE FROM orders_locations
                WHERE order_id = ?;
                """;

       return jdbcTemplate.update(sql, orderId);
    }
}
