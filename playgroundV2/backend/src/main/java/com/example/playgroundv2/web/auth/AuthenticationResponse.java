package com.example.playgroundv2.web.auth;


public class AuthenticationResponse {
    private String token;

    public AuthenticationResponse() {}
    public AuthenticationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}
