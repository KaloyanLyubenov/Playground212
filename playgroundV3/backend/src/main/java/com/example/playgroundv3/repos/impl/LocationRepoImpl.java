package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.LocationEntity;
import com.example.playgroundv3.repos.LocationRepo;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LocationRepoImpl implements LocationRepo {

    private final JdbcTemplate jdbcTemplate;

    public LocationRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int saveLocation(LocationEntity location) {
        String sql = """
                INSERT INTO locations(title, latitude, longitude, description, thumbnail_url, media_type_id, format_type_id)
                VALUES(?, ?, ?, ?, ?, ?, ?);
                """;
        return this.jdbcTemplate.update(
                sql,
                location.getTitle(),
                location.getLat(),
                location.getLng(),
                location.getDescription(),
                location.getThumbnailUrl(),
                location.getMediaTypeId(),
                location.getFormatTypeId()
        );
    }
}
