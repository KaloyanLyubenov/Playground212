package com.example.playgroundv2.repos;

import com.example.playgroundv2.domain.entities.UserRoleEntity;

import java.util.List;

public interface UserRoleRepo {
    public List<UserRoleEntity> findAllRoles();
    public List<UserRoleEntity> findALlRolesOfUser(Long userId);
    public void addRoleToUser(Long roleId, Long userId);
}
