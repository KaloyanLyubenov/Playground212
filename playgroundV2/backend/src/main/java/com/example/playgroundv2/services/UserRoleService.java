package com.example.playgroundv2.services;

import com.example.playgroundv2.domain.entities.UserRoleEntity;
import com.example.playgroundv2.repos.UserRoleRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRoleService {

    private final UserRoleRepo userRoleRepo;
    private List<UserRoleEntity> availableRoles;

    public UserRoleService(UserRoleRepo userRoleRepo) {
        this.userRoleRepo = userRoleRepo;
    }

    @PostConstruct
    public void initRoles(){
        availableRoles = userRoleRepo.findAllRoles();
    }

    public List<UserRoleEntity> getUserRolesByUserId(Long userId){
        return this.userRoleRepo.findALlRolesOfUser(userId);
    }

    public List<UserRoleEntity> getAllRoles(){
        return this.availableRoles;
    }

    public void addRoleToUser(Long userId, Long roleId){
        this.userRoleRepo.addRoleToUser(roleId, userId);
    }

    public Long getRoleIDByRoleName(String roleName){
        for(UserRoleEntity role : availableRoles){
            if(role.getRole().equals(roleName)){
                return role.getId();
            }
        }
        return (long)(-1);
    }
}
