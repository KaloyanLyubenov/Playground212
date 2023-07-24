package com.example.playgroundv3.domain.dtos.location;

public class LocationSendDTO {

    private int id;
    private String title;
    private float lat;
    private float lng;
    private String description;
    private String thumbnailUrl;
    private String mediaType;
    private String formatType;

    public LocationSendDTO(int id, String title, float lat, float lng, String description, String thumbnailUrl, String mediaType, String formatType) {
        this.id = id;
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.mediaType = mediaType;
        this.formatType = formatType;
    }

    public LocationSendDTO(int id, String title, float lat, float lng, String description, String thumbnailUrl) {
        this.id = id;
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
    }

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

    public String getDescription() {
        return description;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public String getMediaType() {
        return mediaType;
    }

    public String getFormatType() {
        return formatType;
    }

    public LocationSendDTO setFormatType(String formatType) {
        this.formatType = formatType;
        return this;
    }

    public LocationSendDTO setMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
}
