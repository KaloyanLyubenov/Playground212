package com.example.playgroundv3.domain.entites;

public class UserRoleEntity {
    private int id;
    private String role;

    //Constructors

    public UserRoleEntity(int id, String role) {
        this.id = id;
        this.role = role;
    }

    //Getters

    public int getId() {
        return id;
    }

    public String getRole() {
        return role;
    }
}
