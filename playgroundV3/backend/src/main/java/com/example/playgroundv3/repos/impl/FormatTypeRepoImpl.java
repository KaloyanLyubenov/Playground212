package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;
import com.example.playgroundv3.repos.FormatTypeRepo;
import com.example.playgroundv3.repos.impl.row_mappers.FormatTypeRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FormatTypeRepoImpl implements FormatTypeRepo {

    private final JdbcTemplate jdbcTemplate;

    public FormatTypeRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<FormatTypeEntity> findAllFormatTypes() {
        String sql = """
            SELECT *
            FROM format_types;
            """;

        return jdbcTemplate.query(sql, new FormatTypeRowMapper());
    }
}
