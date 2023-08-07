package com.example.playgroundv3.domain.dtos.location;

public class LocationDTO {

    private int id;
    private String title;
    private String description;
    private String timeOfDay;
    private float lat;
    private float lng;

    public LocationDTO(int id, String title, String description, String timeOfDay, float lat, float lng) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.timeOfDay = timeOfDay;
        this.lat = lat;
        this.lng = lng;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public float getLat() {
        return lat;
    }

    public float getLng() {
        return lng;
    }

    @Override
    public String toString() {
        return "LocationPreviewDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", timeOfDay='" + timeOfDay + '\'' +
                ", lat=" + lat +
                ", lng=" + lng +
                '}';
    }
}
