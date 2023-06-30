package com.example.playgroundv2.repos;


import com.example.playgroundv2.domain.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserRepo {
    List<UserEntity> findAllUsers();
    int insertUser(UserEntity user);
    int deleteUserById(int id);
    Optional<UserEntity> findUserById(int id);
    Optional<UserEntity> findUserByEmail(String email);
    int updateUser(UserEntity user);
}
