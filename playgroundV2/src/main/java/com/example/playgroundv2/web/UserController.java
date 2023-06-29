package com.example.playgroundv2.web;


import com.example.playgroundv2.entities.UserEntity;
import com.example.playgroundv2.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserEntity> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping("/{id}")
    public UserEntity getUserById(@PathVariable int id){
        return this.userService.getUserById(id);
    }

    @PostMapping
    public void addUser(@RequestBody UserEntity user){
        this.userService.addUser(user);
    }

    @PatchMapping
    public void updateUser(@RequestBody UserEntity user){
        this.userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id){
        this.userService.deleteUserById(id);
    }



}
