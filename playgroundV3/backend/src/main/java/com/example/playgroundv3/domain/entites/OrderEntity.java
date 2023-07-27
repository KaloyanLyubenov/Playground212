package com.example.playgroundv3.domain.entites;

public class OrderEntity {
    private int id;
    private String title;
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String creatorEmail;
    private String phoneNumber;
    private int formatTypeID;
    private int mediaTypeID;

    // Constructors

    public OrderEntity(int id, String title, int userId, String firstName, String lastName, String email, String creatorEmail, String phoneNumber, int formatTypeID, int mediaTypeID) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.creatorEmail = creatorEmail;
        this.phoneNumber = phoneNumber;
        this.formatTypeID = formatTypeID;
        this.mediaTypeID = mediaTypeID;
    }

    public OrderEntity(String title, int userId, String firstName, String lastName, String email, String creatorEmail, String phoneNumber, int formatTypeID, int mediaTypeID) {
        this.title = title;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.creatorEmail = creatorEmail;
        this.phoneNumber = phoneNumber;
        this.formatTypeID = formatTypeID;
        this.mediaTypeID = mediaTypeID;
    }

    // Getters

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getUserId() {
        return userId;
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

    public String getCreatorEmail() {
        return creatorEmail;
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
