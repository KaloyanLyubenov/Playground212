package com.example.playgroundv2.services;

import com.example.playgroundv2.domain.entities.UserEntity;
import com.example.playgroundv2.repos.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;
    private final UserRoleService userRoleService;

    public UserService(UserRepo userRepo, UserRoleService userRoleService) {
        this.userRepo = userRepo;
        this.userRoleService = userRoleService;
    }

    public List<UserEntity> getUsers() {
        List<UserEntity> users = this.userRepo.findAllUsers();
        for(UserEntity user : users){
                user.setRoles(this.userRoleService.getUserRolesByUserId(user.getId()));
        }
        return users;
    }

    public UserEntity getUserById(int id) {
        Optional<UserEntity> optionalUser = this.userRepo.findUserById(id);
        if (optionalUser.isEmpty()) {
            throw new IllegalStateException("User with this id does not exist");
        }
        UserEntity user = optionalUser.get();
        user.setRoles(this.userRoleService.getUserRolesByUserId(user.getId()));
        return user;
    }

    public UserEntity getUserByEmail(String email){
        Optional<UserEntity> optionalUser = this.userRepo.findUserByEmail(email);
        if (optionalUser.isEmpty()) {
            throw new IllegalStateException("User with this id does not exist");
        }
        UserEntity user = optionalUser.get();
        user.setRoles(this.userRoleService.getUserRolesByUserId(user.getId()));
        return user;
    }

    public void addUser(UserEntity user) {
        int result = userRepo.insertUser(user);
        this.userRoleService.addRoleToUser(user.getId(), userRoleService.getRoleIDByRoleName("USER"));
        if (result != 1) {
            throw new IllegalStateException("Something went wrong with adding the user");
        }
    }

    public void updateUser(UserEntity user) {
        int result = this.userRepo.updateUser(user);
        if (result != 1) {
            throw new IllegalStateException("Something went wrong updating the user");
        }
    }


    public void deleteUserById(int id) {
        int result = this.userRepo.deleteUserById(id);
        if (result != 1) {
            throw new IllegalStateException("Something went wrong deleting a user");
        }
    }
}
