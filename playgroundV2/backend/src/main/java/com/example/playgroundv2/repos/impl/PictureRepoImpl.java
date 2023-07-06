package com.example.playgroundv2.repos.impl;

import com.example.playgroundv2.domain.entities.MediaTypeEntity;
import com.example.playgroundv2.domain.entities.PictureEntity;
import com.example.playgroundv2.repos.PictureRepo;
import com.example.playgroundv2.rowMappers.PictureRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PictureRepoImpl implements PictureRepo {

    private final JdbcTemplate jdbcTemplate;

    public PictureRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PictureEntity> findAllPictures() {
        String sql = """
            SELECT p.id AS picture_id, p.link AS link, p.media_type_id AS media_type_id, m.media_type AS media_type
            FROM pictures p
            JOIN media_types m ON p.media_type_id = m.id;
            """;

        return jdbcTemplate.query(sql, new PictureRowMapper());
    }

    @Override
    public List<PictureEntity> findALlPicturesByMediaType(MediaTypeEntity type) {
        String sql = """
            SELECT p.id AS picture_id, p.link AS link, p.media_type_id AS media_type_id, m.media_type AS media_type
            FROM pictures p
            JOIN media_types m ON p.media_type_id = ?;
            """;

        return jdbcTemplate.query(sql, new PictureRowMapper(), type.getId());
    }

    @Override
    public int insertPicture(PictureEntity picture) {
        return 0;
    }

    @Override
    public int deletePicture(Long id) {
        return 0;
    }
}
