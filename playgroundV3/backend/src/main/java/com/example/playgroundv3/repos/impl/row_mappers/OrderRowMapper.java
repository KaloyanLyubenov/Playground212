package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.domain.entites.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OrderRowMapper implements RowMapper {
    @Override
    public OrderEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new OrderEntity(
                rs.getInt("id"),
                rs.getString("first_name"),
                rs.getString("last_name"),
                rs.getString("email"),
                rs.getString("phone_number"),
                rs.getInt("format_type_id"),
                rs.getInt("media_type_id")
        );
    }
}
