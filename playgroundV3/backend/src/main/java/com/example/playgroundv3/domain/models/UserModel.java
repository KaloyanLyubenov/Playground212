package com.example.playgroundv3.domain.models;


import java.util.List;

public class UserModel {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<String> roles;

    // Constructors

    public UserModel(int id, String firstName, String lastName, String email, String password, List<String> roles) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public UserModel(int id, String firstName, String lastName, String email, String password) {
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

    public List<String> getRoles() {
        return roles;
    }

    // Setters


    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
