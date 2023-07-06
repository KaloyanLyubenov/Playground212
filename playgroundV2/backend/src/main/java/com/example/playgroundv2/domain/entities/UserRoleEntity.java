package com.example.playgroundv2.domain.entities;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public class UserRoleEntity {
    private Long id;
    private String role;

    public UserRoleEntity(Long id, String role) {
        this.id = id;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }
}
