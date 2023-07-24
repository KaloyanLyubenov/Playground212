package com.example.playgroundv3.domain.entites;

public class OrderEntity {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private int formatTypeID;
    private int mediaTypeID;

    // Constructors

    public OrderEntity(int id, String firstName, String lastName, String email, String phoneNumber, int formatTypeID, int mediaTypeID) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.formatTypeID = formatTypeID;
        this.mediaTypeID = mediaTypeID;
    }

    public OrderEntity(String firstName, String lastName, String email, String phoneNumber, int formatTypeID, int mediaTypeID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.formatTypeID = formatTypeID;
        this.mediaTypeID = mediaTypeID;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public int getFormatTypeID() {
        return formatTypeID;
    }

    public int getMediaTypeID() {
        return mediaTypeID;
    }
}
