package com.example.playgroundv2.rowMappers;

import com.example.playgroundv2.domain.entities.UserEntity;
import com.example.playgroundv2.domain.entities.UserRoleEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRoleRowMapper implements RowMapper<UserRoleEntity> {

    @Override
    public UserRoleEntity mapRow(ResultSet resultSet, int i) throws SQLException {
        return new UserRoleEntity(
                resultSet.getLong("id"),
                resultSet.getString("role")
        );
    }
}
