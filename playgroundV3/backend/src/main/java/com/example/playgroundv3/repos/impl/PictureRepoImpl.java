package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;
import com.example.playgroundv3.repos.PictureRepo;
import com.example.playgroundv3.repos.impl.row_mappers.PictureRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class PictureRepoImpl implements PictureRepo {

    private final JdbcTemplate jdbcTemplate;

    public PictureRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PictureEntity> findALlPictures() {
        String sql = """
                SELECT *
                FROM pictures
                LIMIT 100;
                """;

        return this.jdbcTemplate.query(sql, new PictureRowMapper());
    }

    @Override
    public List<PictureEntity> findAllPicturesByAlbum(String albumName) {
        String sql = """
                SELECT *
                FROM pictures
                WHERE album_name = ?
                LIMIT 100;
                """;

        return this.jdbcTemplate.query(sql, new PictureRowMapper(), albumName);
    }

    @Override
    public List<PictureEntity> findAllPicturesByMediaType(int mediaTypeId) {
        String sql = """
                SELECT *
                FROM pictures
                WHERE media_type_id = ?
                LIMIT 100;
                """;

        return this.jdbcTemplate.query(sql, new PictureRowMapper(), mediaTypeId);
    }

    @Override
    public List<PictureEntity> findAllByOwnerID(int ownerID) {
        String sql = """
                SELECT *
                FROM pictures
                WHERE owner_id = ?;
                """;

        return this.jdbcTemplate.query(sql, new PictureRowMapper(), ownerID);
    }

    @Override
    public Optional<PictureEntity> findPictureByName(String name) {
        String sql = """
                SELECT *
                FROM pictures
                WHERE name = ?;
                """;

        return this.jdbcTemplate.query(sql, new PictureRowMapper(), name).stream().findFirst();
    }

    @Override
    public int savePicture(PictureModel picture) {
        String sql = """
                INSERT INTO pictures(name, album_name, owner_id, media_type_id)
                VALUES(?, ?, ?, ?);
                """;
        return this.jdbcTemplate.update(
                sql,
                picture.getName(),
                picture.getAlbumName(),
                picture.getOwnerId(),
                picture.getMediaTypeId()
        );
    }


}
