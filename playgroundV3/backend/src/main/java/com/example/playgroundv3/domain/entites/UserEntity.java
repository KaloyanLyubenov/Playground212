package com.example.playgroundv3.domain.entites;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class UserEntity implements UserDetails {

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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.
                stream().
                map(this::mapRole).
                toList();
    }

    private GrantedAuthority mapRole(UserRoleEntity role){
        return new SimpleGrantedAuthority(("ROLE_" + role.getRole()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    // UserData Checkers

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
