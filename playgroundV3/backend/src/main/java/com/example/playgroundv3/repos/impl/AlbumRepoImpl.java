package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.AlbumEntity;
import com.example.playgroundv3.repos.AlbumRepo;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AlbumRepoImpl implements AlbumRepo {

    private final JdbcTemplate jdbcTemplate;

    public AlbumRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int saveAlbum(AlbumEntity album) {
        String sql = """
                INSERT INTO albums( album_name, thumbnail_pic_name, time_of_day, media_type, order_id)
                VALUES(?, ?, ?, ?, ?);
                """;

        try {
            this.jdbcTemplate.update(sql, album.getAlbumName(), album.getThumbnailPicName(), album.getTimeOfDay(), album.getMediaType(), album.getOrderID());

            String idQuery = "SELECT LAST_INSERT_ID()";
            return jdbcTemplate.queryForObject(idQuery, Integer.class);
        } catch (DataAccessException ex) {
            ex.printStackTrace();
            return -1;
        }
    }

    @Override
    public int addThumbnail(int albumID, String thumbnailName) {
        return 0;
    }
}
