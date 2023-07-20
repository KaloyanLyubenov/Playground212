package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FormatTypeRowMapper implements RowMapper<FormatTypeEntity> {
    @Override
    public FormatTypeEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new FormatTypeEntity(rs.getInt("id"),
                rs.getString("format_type"));
    }
}
