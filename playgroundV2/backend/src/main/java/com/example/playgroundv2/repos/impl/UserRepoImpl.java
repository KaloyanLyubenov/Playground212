package com.example.playgroundv2.repos.impl;


import com.example.playgroundv2.domain.entities.UserEntity;
import com.example.playgroundv2.repos.UserRepo;
import com.example.playgroundv2.rowMappers.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepoImpl implements UserRepo {

    private final JdbcTemplate jdbcTemplate;


    public UserRepoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserEntity> findAllUsers() {
        String sql = """
            SELECT id, first_name, last_name, email, password, role
            FROM users
            LIMIT 10;
            """;

        return jdbcTemplate.query(sql, new UserRowMapper());
    }

    @Override
    public int insertUser(UserEntity user) {
        String sql = """
                INSERT INTO users(first_name, last_name, password, email, role)
                VALUES (?, ?, ?, ?, ?);
                """;
        return jdbcTemplate.update(sql,
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getEmail(),
                user.getRole());
    }

    @Override
    public int deleteUserById(int id) {
        String sql = """
                DELETE FROM users
                WHERE id = ?
                """;
        return jdbcTemplate.update(sql, id);
    }

    @Override
    public Optional<UserEntity> findUserById(int id) {
        String sql = """
                SELECT * FROM users
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, new UserRowMapper(), id)
                .stream().findFirst();
    }

    @Override
    public Optional<UserEntity> findUserByEmail(String email) {
        String sql = """
                SELECT * FROM users
                WHERE email = ?
                """;
        return jdbcTemplate.query(sql, new UserRowMapper(), email)
                .stream().findFirst();
    }

    @Override
    public int updateUser(UserEntity user){
        String sql = """
                UPDATE users
                SET first_name = ?, last_name = ?, password = ?, email = ?, role = ?   
                WHERE id = ?
                """;
        return jdbcTemplate.update(sql,
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getEmail(),
                user.getId(),
                user.getRole());
    }
}
