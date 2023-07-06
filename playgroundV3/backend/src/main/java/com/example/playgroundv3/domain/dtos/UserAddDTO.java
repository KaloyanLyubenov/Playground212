package com.example.playgroundv3.domain.dtos;

public class UserAddDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    // Constructor

    public UserAddDTO(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // Getters


    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
