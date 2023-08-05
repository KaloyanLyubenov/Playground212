package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.OrderEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OrderRowMapper implements RowMapper {
    @Override
    public OrderEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new OrderEntity(
                rs.getInt("id"),
                rs.getInt("user_id"),
                rs.getString("format"),
                rs.getString("type"),
                rs.getString("status"),
                rs.getDouble("to_pay")
        );
    }
}
