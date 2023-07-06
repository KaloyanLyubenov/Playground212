package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.entites.UserRoleEntity;
import com.example.playgroundv3.repos.UserRoleRepo;
import com.example.playgroundv3.repos.impl.row_mappers.UserRoleRowMapper;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
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
                SELECT *
                FROM user_roles;
                """;

        return jdbcTemplate.query(sql, new UserRoleRowMapper());
    }

    @Override
    public int addRoleToUser(String userEmail, int roleId) {
        String sql = """
                INSERT INTO users_user_roles(user_email, user_role_id)
                VALUES (?, ?);
                """;

        return this.jdbcTemplate.update(sql, userEmail, roleId);
    }

    @Override
    public List<UserRoleEntity> findUserRolesByUserEmail(String email) {
        String sql = """
                SELECT ur.id AS id, ur.role AS role
                FROM user_roles ur
                JOIN users_user_roles uur ON uur.user_role_id = ur.id
                JOIN users u ON u.email = ?;
                """;

        return jdbcTemplate.query(sql, new UserRoleRowMapper(), email);
    }


}
