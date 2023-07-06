package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.UserEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<UserEntity> {
    @Override
    public UserEntity mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return new UserEntity(
                resultSet.getInt("id"),
                resultSet.getString("first_name"),
                resultSet.getString("last_name"),
                resultSet.getString("email"),
                resultSet.getString("password")
        );
    }
}
