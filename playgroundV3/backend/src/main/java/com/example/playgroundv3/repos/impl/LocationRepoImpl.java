package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.LocationEntity;
import com.example.playgroundv3.repos.LocationRepo;
import com.example.playgroundv3.repos.impl.row_mappers.LocationRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LocationRepoImpl implements LocationRepo {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedJdbcTemplate;


    public LocationRepoImpl(JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedJdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.namedJdbcTemplate = namedJdbcTemplate;
    }


    @Override
    public List<LocationEntity> findAllByFormat(String format) {
        String sql = """
                SELECT *
                FROM locations
                WHERE format = ?;
                """;

        return this.jdbcTemplate.query(sql, new LocationRowMapper(), format);
    }

    @Override
    public List<LocationEntity> findAllByType(String type) {
        String sql = """
                SELECT *
                FROM locations
                WHERE type = ?;
                """;

        return this.jdbcTemplate.query(sql, new LocationRowMapper(), type);
    }

    @Override
    public List<LocationEntity> findAllByFormatAndType(String format, String type) {
        String sql = """
                SELECT *
                FROM locations
                WHERE format = ? AND type = ?;
                """;

        return this.jdbcTemplate.query(sql, new LocationRowMapper(), format, type);
    }
    @Override
    public List<Integer> saveLocations(List<LocationEntity> locations) {
        String sql = """
                INSERT INTO locations(title, latitude, longitude, description, type, format, time_of_day) 
                VALUES(:title ,:latitude, :longitude, :description, :type, :format, :time_of_day)
                """;

        SqlParameterSource[] batchParameters = locations.stream()
                .map(location -> new MapSqlParameterSource()
                        .addValue("title", location.getTitle())
                        .addValue("latitude", location.getLat())
                        .addValue("longitude", location.getLng())
                        .addValue("description", location.getDescription())
                        .addValue("type", location.getType())
                        .addValue("format", location.getFormat())
                        .addValue("time_of_day", location.getTimeOfDay()))
                .toArray(SqlParameterSource[]::new);

        List<Integer> generatedIds = new ArrayList<>();
        KeyHolder keyHolder = new GeneratedKeyHolder();

        for (int i = 0; i < batchParameters.length; i++) {
            SqlParameterSource parameterSource = batchParameters[i];
            this.namedJdbcTemplate.update(sql, parameterSource, keyHolder, new String[]{"id"});
            generatedIds.add(keyHolder.getKey().intValue());
        }

        return generatedIds;
    }

    @Override
    public List<LocationEntity> findAllByOrderID(int orderID) {
        String sql = """
            SELECT l.id as id, l.title as title, l.latitude as latitude , l.longitude as longitude, l.description as description, l.type as type, l.time_of_day as time_of_day, l.format as format
            FROM locations as l
            JOIN orders_locations as ol on l.id = ol.location_id  
            WHERE ol.order_id = ?;
            """;

        return this.jdbcTemplate.query(sql, new LocationRowMapper(), orderID);
    }


}
