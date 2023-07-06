package com.example.playgroundv3.repos.impl;

import com.example.playgroundv3.domain.dtos.UserAddDTO;
import com.example.playgroundv3.domain.entites.UserEntity;
import com.example.playgroundv3.repos.UserRepo;
import com.example.playgroundv3.repos.impl.row_mappers.UserRowMapper;
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
            SELECT *
            FROM users
            LIMIT 10;
            """;

        return jdbcTemplate.query(sql, new UserRowMapper());
    }

    @Override
    public int saveUser(UserAddDTO user) {
        String sql = """
                INSERT INTO users(first_name, last_name, password, email)
                VALUES (?, ?, ?, ?);
                """;

        return jdbcTemplate.update(
                sql,
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getEmail());
    }

    @Override
    public Optional<UserEntity> findUserByID(int id) {
        String sql = """
            SELECT *
            FROM users
            WHERE id = ?;
            """;

        return jdbcTemplate.query(sql, new UserRowMapper(), id).stream().findFirst();
    }


}
