package com.example.playgroundv2.repos.impl;

import com.example.playgroundv2.domain.entities.UserRoleEntity;
import com.example.playgroundv2.repos.UserRoleRepo;
import com.example.playgroundv2.rowMappers.UserRoleRowMapper;
import com.example.playgroundv2.rowMappers.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRoleRepoImpl implements UserRoleRepo {

    private final JdbcTemplate jdbcTemplate;

    public UserRoleRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserRoleEntity> findAllRoles() {
        String sql = """
                SELECT id, role
                FROM user_roles
                LIMIT 10;
                """;

        return jdbcTemplate.query(sql, new UserRoleRowMapper());
    }

    @Override
    public List<UserRoleEntity> findALlRolesOfUser(Long userId) {
        String sql = """
                SELECT ur.id AS id, ur.role AS role
                FROM user_roles ur
                JOIN users_user_roles ON user_id = ?;
                """;

        return jdbcTemplate.query(sql, new UserRoleRowMapper());
    }

    @Override
    public void addRoleToUser(Long roleId, Long userId) {
        String sql = """
                INSERT INTO users(user_id, role_id)
                    VALUES (?, ?);
                """;

        jdbcTemplate.update(sql, userId, roleId);
    }
}
