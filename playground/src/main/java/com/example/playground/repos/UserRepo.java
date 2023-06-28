package com.example.playground.repos;

import com.example.playground.domain.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserRepo {
    List<UserEntity> selectUsers();
    int insertUser(UserEntity user);
    int deleteUserById(int id);
    Optional<UserEntity> selectUserById(int id);
    int updateUser(UserEntity user);
}
