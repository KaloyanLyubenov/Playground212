package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.user.UserAddDTO;
import com.example.playgroundv3.domain.dtos.user.UserDTO;
import com.example.playgroundv3.domain.dtos.user.UserDetailsOrderDTO;
import com.example.playgroundv3.services.UserService;
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

    @GetMapping("/{email}")
    public UserDetailsOrderDTO getUserByEmail(@PathVariable String email) {return this.userService.getUserDetailsForOrderByEmail(email);}

    @PostMapping
    public void addUser(@RequestBody UserAddDTO user){
        this.userService.createUser(user);
    }
}
