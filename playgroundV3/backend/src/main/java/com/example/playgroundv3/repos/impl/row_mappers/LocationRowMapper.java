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
                rs.getFloat("latitude"),
                rs.getFloat("longitude"),
                rs.getString("description"),
                rs.getString("thumbnail_url"),
                rs.getInt("media_type_id"),
                rs.getInt("format_type_id")
        );
    }
}
