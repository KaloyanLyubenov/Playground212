package com.example.playgroundv3.domain.dtos;

public class UserAddRoleDTO {
    private String userEmail;
    private String roleName;

    // Constructors

    public UserAddRoleDTO(String userEmail, String roleName) {
        this.userEmail = userEmail;
        this.roleName = roleName;
    }

    // Getters

    public String getUserEmail() {
        return userEmail;
    }

    public String getRoleName() {
        return roleName;
    }
}
