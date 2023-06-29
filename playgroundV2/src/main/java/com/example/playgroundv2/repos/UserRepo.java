package com.example.playgroundv2.repos;


import com.example.playgroundv2.entities.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserRepo {
    List<UserEntity> selectUsers();
    int insertUser(UserEntity user);
    int deleteUserById(int id);
    Optional<UserEntity> selectUserById(int id);
    int updateUser(UserEntity user);
}
