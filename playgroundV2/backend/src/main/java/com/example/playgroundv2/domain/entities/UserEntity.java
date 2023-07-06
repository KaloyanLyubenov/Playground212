package com.example.playgroundv2.domain.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class UserEntity implements UserDetails {
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private List<UserRoleEntity> roles;


    public UserEntity(){}

    public UserEntity(
            String firstName,
            String lastName,
            String email,
            String password,
            List<UserRoleEntity> roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }

    public UserEntity(
            Long id,
            String firstName,
            String lastName,
            String email, String password,
            List<UserRoleEntity> roles
    )
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }

    public UserEntity(
            Long id,
            String firstName,
            String lastName,
            String email,
            String password
    )
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }

    public UserEntity(
            String firstName,
            String lastName,
            String email,
            String password
    )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }


    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
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

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

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

    public String getEmail() {
        return email;
    }

    public List<UserRoleEntity> getRole() {
        return roles;
    }

    public UserEntity setRoles(List<UserRoleEntity> roles){
        this.roles = roles;
        return this;
    }

}
