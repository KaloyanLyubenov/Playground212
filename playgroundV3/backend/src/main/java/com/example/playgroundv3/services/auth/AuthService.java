package com.example.playgroundv3.services.auth;

import com.example.playgroundv3.domain.dtos.UserAddDTO;
import com.example.playgroundv3.domain.dtos.auth.AuthenticationRequest;
import com.example.playgroundv3.domain.dtos.auth.AuthenticationResponse;
import com.example.playgroundv3.domain.dtos.auth.RegisterRequest;
import com.example.playgroundv3.domain.entites.UserEntity;
import com.example.playgroundv3.repos.UserRepo;
import com.example.playgroundv3.services.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepo userRepo;
    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepo userRepo, UserService userService, JwtService jwtService, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.userService = userService;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    // Saves a user to the database and returns an authorization token
    public AuthenticationResponse register(RegisterRequest request) {
        var user = new UserAddDTO(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword())
        );

        this.userService.createUser(user);

        var jwtToken = this.jwtService.generateToken(new UserEntity(
                request.getFirstName(),
                request.getLastName(),
                request.getEmail(),
                passwordEncoder.encode(request.getPassword())
        ));
        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        // This makes sure the user is authenticated
        this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = this.userService.getUserByEmail(request.getEmail());

        var jwtToken = this.jwtService.generateToken(new UserEntity(
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                passwordEncoder.encode(user.getPassword())
        ));
        return new AuthenticationResponse(jwtToken);
    }
}
