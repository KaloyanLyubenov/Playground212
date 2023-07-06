package com.example.playgroundv2.rowMappers;

import com.example.playgroundv2.domain.entities.MediaTypeEntity;
import com.example.playgroundv2.domain.entities.PictureEntity;
import com.example.playgroundv2.domain.entities.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PictureRowMapper implements RowMapper<PictureEntity> {

    @Override
    public PictureEntity mapRow(ResultSet resultSet, int i) throws SQLException {
        return new PictureEntity(
                resultSet.getInt("id"),
                resultSet.getString("link"),
                new MediaTypeEntity(
                        resultSet.getInt("media_type_id"),
                        resultSet.getString("media_type")
                )
        );
    }

}
