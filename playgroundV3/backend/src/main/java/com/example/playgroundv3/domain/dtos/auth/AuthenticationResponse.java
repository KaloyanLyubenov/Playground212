package com.example.playgroundv3.domain.dtos.auth;

public class AuthenticationResponse {
    private String jwtToken;
    private String userEmail;

    public AuthenticationResponse(String jwtToken, String userEmail) {
        this.jwtToken = jwtToken;
        this.userEmail = userEmail;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public String getUserEmail() {
        return userEmail;
    }
}
