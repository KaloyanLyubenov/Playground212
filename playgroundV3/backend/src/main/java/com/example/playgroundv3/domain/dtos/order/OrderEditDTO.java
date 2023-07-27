package com.example.playgroundv3.domain.dtos.order;

import java.util.List;

public class OrderEditDTO {

    private int id;
    private String title;
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String creatorEmail;
    private String phoneNumber;
    private String mediaType;
    private String formatType;
    private List<Integer> locationIDs;

    public OrderEditDTO(int id, String title, int userId, String firstName, String lastName, String email, String creatorEmail, String phoneNumber, String mediaType, String formatType, List<Integer> locationIDs) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.creatorEmail = creatorEmail;
        this.phoneNumber = phoneNumber;
        this.mediaType = mediaType;
        this.formatType = formatType;
        this.locationIDs = locationIDs;
    }

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

    public String getMediaType() {
        return mediaType;
    }

    public String getFormatType() {
        return formatType;
    }

    public List<Integer> getLocationIDs() {
        return locationIDs;
    }
}
