package com.example.playgroundv3.domain.dtos.location;

public class LocationPreviewDTO {
    private String title;
    private float lat;
    private float lng;

    public LocationPreviewDTO(String title, float lat, float lng) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
    }

    public String getTitle() {
        return title;
    }

    public float getLat() {
        return lat;
    }

    public float getLng() {
        return lng;
    }
}
