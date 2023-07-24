package com.example.playgroundv3.domain.dtos.auth;

import java.util.List;

public class AuthenticationResponse {
    private String jwtToken;
    private List<String> roles;

    public AuthenticationResponse(String jwtToken, List<String> roles) {
        this.jwtToken = jwtToken;
        this.roles = roles;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public List<String> getRoles() {
        return roles;
    }

}
