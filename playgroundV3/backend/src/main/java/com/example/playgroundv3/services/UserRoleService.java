package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.UserAddRoleDTO;
import com.example.playgroundv3.domain.entites.UserRoleEntity;
import com.example.playgroundv3.repos.UserRoleRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserRoleService {
    private final UserRoleRepo userRoleRepo;
    private Map<String, Integer> availableRoles;

    public UserRoleService(UserRoleRepo userRoleRepo) {
        this.userRoleRepo = userRoleRepo;
    }

    @PostConstruct
    public void initRoles(){
        this.availableRoles = mapRoles(this.userRoleRepo.findAllRoles());
    }

    private static Map<String, Integer> mapRoles(List<UserRoleEntity> roles){
        Map<String, Integer> rolesMap = new HashMap<>();
        for(UserRoleEntity role : roles){
            rolesMap.put(role.getRole(), role.getId());
        }

        return rolesMap;
    }

    public void addRoleToUser(UserAddRoleDTO userAddRoleDTO){
        int result = this.userRoleRepo.addRoleToUser(userAddRoleDTO.getUserEmail(), this.availableRoles.get(userAddRoleDTO.getRoleName()));
        if(result != 1){
            throw new IllegalStateException("Error adding role to user with email " + userAddRoleDTO.getUserEmail());
        }
    }

    public List<String> getUserRolesByUserEmail(String email){
        return this.userRoleRepo.findUserRolesByUserEmail(email).stream().map(UserRoleEntity::getRole).toList();
    }
}
