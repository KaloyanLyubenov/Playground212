package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.AlbumEntity;
import com.example.playgroundv3.domain.entites.PictureEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AlbumRowMapper implements RowMapper<AlbumEntity> {
    @Override
    public AlbumEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new AlbumEntity(
                rs.getInt("id"),
                rs.getString("thumbnail_pic_name"),
                rs.getString("album_name"),
                rs.getString("time_of_day"),
                rs.getString("media_type"),
                rs.getInt("order_id")
        );
    }
}
