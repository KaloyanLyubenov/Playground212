package com.example.playgroundv3.domain.entites;

import java.util.List;

public class UserEntity {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<UserRoleEntity> roles;

    // Constructors

    public UserEntity(int id, String firstName, String lastName, String password, String email, List<UserRoleEntity> roles) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }

    public UserEntity(int id, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public UserEntity(String firstName, String lastName, String email, String password) {
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

    public List<UserRoleEntity> getRoles() {
        return roles;
    }
}
