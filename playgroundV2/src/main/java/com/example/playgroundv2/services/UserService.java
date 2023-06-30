package com.example.playgroundv2.services;

import com.example.playgroundv2.domain.entities.UserEntity;
import com.example.playgroundv2.repos.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<UserEntity> getUsers(){
        return this.userRepo.findAllUsers();
    }

    public UserEntity getUserById(int id){
        Optional<UserEntity> optionalUser = this.userRepo.findUserById(id);
        if(optionalUser.isEmpty()){
            throw new IllegalStateException("User with this id does not exist");
        }
        return optionalUser.get();
    }

    public void addUser(UserEntity user){
        int result = userRepo.insertUser(user);
        if(result != 1){
            throw new IllegalStateException("Something went wrong with adding the user!");
        }
    }

    public void updateUser(UserEntity user){
        int result = this.userRepo.updateUser(user);
        if(result != 1){
            throw new IllegalStateException("Something wnt wrong updating the user");
        }
    }


    public void deleteUserById(int id){
        int result = this.userRepo.deleteUserById(id);
        if(result != 1){
            throw new IllegalStateException("Something went wrong deleting a user");
        }
    }
}
