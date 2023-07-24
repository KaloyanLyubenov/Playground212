package com.example.playgroundv3.domain.dtos.order;

import java.util.List;

public class OrderEditDTO {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String mediaType;
    private String formatType;
    private List<Integer> locationIDs;

    public OrderEditDTO(int id, String firstName, String lastName, String email, String phoneNumber, String mediaType, String formatType, List<Integer> locationIDs) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.mediaType = mediaType;
        this.formatType = formatType;
        this.locationIDs = locationIDs;
    }

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
