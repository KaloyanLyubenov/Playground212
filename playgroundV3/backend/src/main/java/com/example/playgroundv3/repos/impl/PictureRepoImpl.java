package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;
import com.example.playgroundv3.repos.PictureRepo;
import com.example.playgroundv3.repos.impl.row_mappers.PictureRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.List;
import java.util.Optional;

@Repository
public class PictureRepoImpl implements PictureRepo {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedJdbcTemplate;

    public PictureRepoImpl(JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate namedJdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.namedJdbcTemplate = namedJdbcTemplate;
    }

    @Override
    public int[] savePictures(List<PictureEntity> pictures){
        String sql = """
                INSERT INTO pictures(name, album_id, paid_for)
                VALUES(:name, :album_id, :paid_for);
                """;
        SqlParameterSource[] batchParameters = pictures.stream()
                .map(pic -> new MapSqlParameterSource()
                        .addValue("name", pic.getName())
                        .addValue("album_id", pic.getAlbumID())
                        .addValue("paid_for", pic.isPaidFor()))
                .toArray(SqlParameterSource[]::new);

        return this.namedJdbcTemplate.batchUpdate(sql, batchParameters);
    }


}
