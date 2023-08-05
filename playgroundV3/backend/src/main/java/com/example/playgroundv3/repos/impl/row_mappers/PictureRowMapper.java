package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.entites.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PictureRowMapper implements RowMapper<PictureEntity> {
    @Override
    public PictureEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new PictureEntity(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getInt("album_id"),
                rs.getBoolean("paid_for")
        );
    }
}
