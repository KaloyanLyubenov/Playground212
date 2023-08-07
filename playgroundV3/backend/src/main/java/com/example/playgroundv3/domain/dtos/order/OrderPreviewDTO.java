package com.example.playgroundv3.domain.dtos.order;

import com.example.playgroundv3.domain.dtos.location.LocationPreviewDTO;

import java.util.List;

public class OrderPreviewDTO {
    private int id;
    private List<LocationPreviewDTO> locations;
    private double toPay;
    private String userEmail;

    public OrderPreviewDTO(int id, List<LocationPreviewDTO> locations, double toPay, String userEmail) {
        this.id = id;
        this.locations = locations;
        this.toPay = toPay;
        this.userEmail = userEmail;
    }

    public OrderPreviewDTO(int id, double toPay, String userEmail) {
        this.id = id;
        this.toPay = toPay;
        this.userEmail = userEmail;
    }

    public OrderPreviewDTO(int id, double toPay) {
        this.id = id;
        this.toPay = toPay;
    }

    public int getId() {
        return id;
    }

    public List<LocationPreviewDTO> getLocations() {
        return locations;
    }

    public double getToPay() {
        return toPay;
    }

    public OrderPreviewDTO setLocations(List<LocationPreviewDTO> locations) {
        this.locations = locations;
        return this;
    }

    public String getUserEmail() {
        return userEmail;
    }
}
