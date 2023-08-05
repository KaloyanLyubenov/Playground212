package com.example.playgroundv3.domain.entites;

public class LocationEntity {

    private int id;
    private String title;
    private String description;
    private String type;
    private String format;
    private String timeOfDay;
    private float lat;
    private float lng;

    public LocationEntity(int id, String title, String description, String type, String format, String timeOfDay, float lat, float lng) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.format = format;
        this.timeOfDay = timeOfDay;
        this.lat = lat;
        this.lng = lng;
    }

    public LocationEntity(String title,
                          String description,
                          String type,
                          String format,
                          String timeOfDay,
                          float lat,
                          float lng) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.format = format;
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

    public String getType() {
        return type;
    }

    public String getFormat() {
        return format;
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
}
