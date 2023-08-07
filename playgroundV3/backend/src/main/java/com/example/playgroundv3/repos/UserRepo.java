package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.dtos.user.UserAddDTO;
import com.example.playgroundv3.domain.entites.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserRepo {

    public List<UserEntity> findAllUsers();
    public int saveUser(UserAddDTO user);
    public Optional<UserEntity> findUserByEmail(String email);
    public Optional<UserEntity> findUserByID(int id);

}
