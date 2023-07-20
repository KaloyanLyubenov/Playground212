package com.example.playgroundv3.domain.entites;

public class LocationEntity {

    private int id;
    private String title;
    private float lat;
    private float lng;
    private String description;
    private String thumbnailUrl;
    private int mediaTypeId;
    private int formatTypeId;

    public LocationEntity(int id, String title, float lat, float lng, String description, String thumbnailUrl, int mediaTypeId, int formatTypeId) {
        this.id = id;
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.mediaTypeId = mediaTypeId;
        this.formatTypeId = formatTypeId;
    }

    public LocationEntity(String title, float lat, float lng, String description, String thumbnailUrl, int mediaTypeId, int formatTypeId) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.mediaTypeId = mediaTypeId;
        this.formatTypeId = formatTypeId;
    }

    // Getters


    public int getId() {
        return id;
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

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public int getMediaTypeId() {
        return mediaTypeId;
    }

    public int getFormatTypeId() {
        return formatTypeId;
    }

    public String getDescription() {
        return description;
    }
}
