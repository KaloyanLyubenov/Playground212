package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.LocationEntity;
import com.example.playgroundv3.domain.entites.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LocationRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new LocationEntity(
                rs.getInt("id"),
                rs.getString("title"),
                rs.getString("description"),
                rs.getString("type"),
                rs.getString("format"),
                rs.getString("time_of_day"),
                rs.getFloat("latitude"),
                rs.getFloat("longitude")
        );
    }
}
