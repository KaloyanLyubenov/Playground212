package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.UserAddDTO;
import com.example.playgroundv3.domain.dtos.UserAddRoleDTO;
import com.example.playgroundv3.domain.dtos.UserDTO;
import com.example.playgroundv3.domain.dtos.UserDetailsOrderDTO;
import com.example.playgroundv3.domain.entites.UserEntity;
import com.example.playgroundv3.domain.models.UserModel;
import com.example.playgroundv3.repos.UserRepo;
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

    public List<UserDTO> getAllUsers() {
        List<UserDTO> users = this.userRepo.findAllUsers()
                .stream().map(
                        entity ->
                            new UserDTO(
                                    entity.getFirstName(),
                                    entity.getLastName(),
                                    entity.getEmail(),
                                    entity.getPassword()
                            )
                ).toList();

        return users;
    }

    public UserModel getUserByID(int id){
        Optional<UserEntity> optionalUser = this.userRepo.findUserByID(id);

        if(optionalUser.isEmpty()){
            throw new IllegalArgumentException("User with this ID not found");
        }

        UserEntity user = optionalUser.get();
        UserModel userModel = new UserModel(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
        userModel.setRoles(this.userRoleService.getUserRolesByUserEmail(user.getEmail()));

        return userModel;
    }

    public UserModel getUserByEmail(String email){
        UserEntity user =  userRepo.findUserByEmail(email).orElseThrow(() -> new IllegalStateException("User with this email not found"));
        UserModel userModel = new UserModel(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
        userModel.setRoles(this.userRoleService.getUserRolesByUserEmail(user.getEmail()));

        return userModel;
    }

    public UserDetailsOrderDTO getUserDetailsForOrderByEmail(String email){
        UserEntity user =  userRepo.findUserByEmail(email).orElseThrow(() -> new IllegalStateException("User with this email not found"));
        UserDetailsOrderDTO userDetails = new UserDetailsOrderDTO(user.getFirstName(), user.getLastName(), user.getEmail());

        return userDetails;
    }

    public void createUser(UserAddDTO user){
        int result = this.userRepo.saveUser(user);
        if(result != 1){
            throw new IllegalStateException("Something went wrong adding user");
        }
        this.userRoleService.addRoleToUser(new UserAddRoleDTO(user.getEmail(), "USER"));
    }

}
