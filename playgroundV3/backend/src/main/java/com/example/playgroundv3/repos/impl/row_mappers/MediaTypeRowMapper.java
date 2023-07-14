package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.MediaTypeEntity;
import com.example.playgroundv3.domain.entites.UserRoleEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MediaTypeRowMapper implements RowMapper<MediaTypeEntity> {
    @Override
    public MediaTypeEntity mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return new MediaTypeEntity(
                resultSet.getInt("id"),
                resultSet.getString("media_type")
        );
    }
}
