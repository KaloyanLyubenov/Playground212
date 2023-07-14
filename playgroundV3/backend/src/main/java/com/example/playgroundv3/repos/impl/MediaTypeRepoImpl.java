package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.MediaTypeEntity;
import com.example.playgroundv3.repos.MediaTypeRepo;
import com.example.playgroundv3.repos.impl.row_mappers.MediaTypeRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MediaTypeRepoImpl implements MediaTypeRepo {

    private final JdbcTemplate jdbcTemplate;

    public MediaTypeRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<MediaTypeEntity> findAllMediaTypes() {
        String sql = """
            SELECT *
            FROM media_types;
            """;

        return jdbcTemplate.query(sql, new MediaTypeRowMapper());
    }
}
