package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.UserAddDTO;
import com.example.playgroundv3.domain.dtos.UserDTO;
import com.example.playgroundv3.domain.models.UserModel;
import com.example.playgroundv3.services.UserService;
import org.springframework.stereotype.Controller;
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
    public List<UserDTO> getAllUsers(){
        return this.userService.getAllUsers();
    }

    //    @GetMapping("/{id}")
    //    public UserModel getUserById(@PathVariable int id){
    //        return this.userService.getUserByID(id);
    //    }

    @GetMapping("/{email}")
    public UserModel getUserByEmail(@PathVariable String email) {return this.userService.getUserByEmail(email);}

    @PostMapping
    public void addUser(@RequestBody UserAddDTO user){
        this.userService.createUser(user);
    }
}
