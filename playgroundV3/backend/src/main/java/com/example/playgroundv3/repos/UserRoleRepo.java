package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.UserRoleEntity;

import java.util.List;

public interface UserRoleRepo {

    public List<UserRoleEntity> findAllRoles();
    public int addRoleToUser(String userEmail, int roleId);
    public List<UserRoleEntity> findUserRolesByUserEmail(String email);
}
