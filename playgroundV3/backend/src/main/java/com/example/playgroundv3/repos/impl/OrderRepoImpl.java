package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.domain.entites.UserEntity;
import com.example.playgroundv3.repos.OrderRepo;
import com.example.playgroundv3.repos.impl.row_mappers.LocationRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.OrderRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public class OrderRepoImpl implements OrderRepo {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public OrderRepoImpl(JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }


    @Override
    @Transactional
    public boolean saveOrderAndLocations(OrderEntity order, List<Integer> locationIDs) {
        String orderSQL = """
                INSERT INTO orders( user_id, format, type, status, to_pay)
                VALUES(?, ?, ?, ?, ?);
                """;

        try {
            int res = this.jdbcTemplate.update(orderSQL, order.getUserId(), order.getFormat(), order.getType(), order.getStatus(), order.getToPay());

            if (res != 1) {
                return false;
            }

            String idQuery = "SELECT LAST_INSERT_ID()";
            int orderID = jdbcTemplate.queryForObject(idQuery, Integer.class);

            String locationsOrderSQL = """
                INSERT INTO orders_locations(order_id, location_id)
                VALUES(:order_id, :location_id);
                """;

            SqlParameterSource[] batchParameters = locationIDs.stream()
                    .map(locationID -> new MapSqlParameterSource()
                            .addValue("order_id", orderID)
                            .addValue("location_id", locationID))
                    .toArray(SqlParameterSource[]::new);

            this.namedParameterJdbcTemplate.batchUpdate(locationsOrderSQL, batchParameters);
        } catch (DataAccessException ex) {
            ex.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public List<OrderEntity> findAllByUserID(int userID) {
            String sql = """
            SELECT *
            FROM orders
            WHERE user_id = ?;
            """;

            return this.jdbcTemplate.query(sql, new OrderRowMapper(), userID);
    }

    @Override
    public List<OrderEntity> findAll() {
        String sql = """
            SELECT *
            FROM orders;
            """;

        return this.jdbcTemplate.query(sql, new OrderRowMapper());
    }

    @Override
    public int updateOrderPriceByOrderID(int orderID, double price) {
        String sql = """
                UPDATE orders
                SET to_pay = ?
                WHERE id = ?;
                """;
        return this.jdbcTemplate.update(sql, price, orderID);
    }

    @Override
    public Optional<OrderEntity> findByOrderID(int orderID) {
        String sql = """
            SELECT *
            FROM orders
            WHERE id = ?;
            """;

        return this.jdbcTemplate.query(sql, new OrderRowMapper(), orderID).stream().findFirst();
    }
}
