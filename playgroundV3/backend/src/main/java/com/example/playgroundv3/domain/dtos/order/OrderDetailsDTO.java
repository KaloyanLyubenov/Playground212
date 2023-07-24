package com.example.playgroundv3.domain.dtos.order;

public class OrderDetailsDTO {

    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String mediaType;
    private String formatType;

    public OrderDetailsDTO(int id, String firstName, String lastName, String email, String phoneNumber, String mediaType, String formatType) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.mediaType = mediaType;
        this.formatType = formatType;
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
}
