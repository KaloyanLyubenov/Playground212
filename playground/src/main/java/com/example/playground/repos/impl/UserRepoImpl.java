package com.example.playground.repos.impl;

import com.example.playground.domain.entities.UserEntity;
import com.example.playground.repos.UserRepo;
import com.example.playground.rowMappers.UserRowMapper;
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
    public List<UserEntity> selectUsers() {
        String sql = """
            SELECT id, first_name, last_name, email, password
            FROM users
            LIMIT 10;
            """;

        return jdbcTemplate.query(sql, new UserRowMapper());
    }

    @Override
    public int insertUser(UserEntity user) {
        String sql = """
                INSERT INTO users(first_name, last_name, password, email)
                VALUES (?, ?, ?, ?);
                """;
        return jdbcTemplate.update(sql,
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getEmail());
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
    public Optional<UserEntity> selectUserById(int id) {
        String sql = """
                SELECT * FROM users
                WHERE id = ?
                """;
        return jdbcTemplate.query(sql, new UserRowMapper(), id)
                .stream().findFirst();
    }

    @Override
    public int updateUser(UserEntity user){
        String sql = """
                UPDATE users
                SET first_name = ?, last_name = ?, password = ?, email = ?   
                WHERE id = ?
                """;
        return jdbcTemplate.update(sql,
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getEmail(),
                user.getId());
    }
}
