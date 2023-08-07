package com.example.playgroundv3.domain.dtos.user;

public class UserDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    // Constructors

    public UserDTO(int id, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // Getters


    public int getId() {
        return id;
    }

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
