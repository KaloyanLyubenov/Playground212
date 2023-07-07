package com.example.playgroundv3.repos.impl.row_mappers;

import com.example.playgroundv3.domain.entites.UserRoleEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRoleRowMapper implements RowMapper<UserRoleEntity> {
    @Override
    public UserRoleEntity mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        return new UserRoleEntity(
                resultSet.getInt("id"),
                resultSet.getString("role")
        );
    }
}
