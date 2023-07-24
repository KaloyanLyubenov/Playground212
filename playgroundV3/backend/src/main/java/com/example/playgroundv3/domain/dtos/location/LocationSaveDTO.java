package com.example.playgroundv3.domain.dtos.location;

public class LocationSaveDTO {

    private String title;
    private float lat;
    private float lng;
    private String description;
    private String thumbnailUrl;
    private String mediaType;
    private String formatType;

    public LocationSaveDTO(
            String title,
            float lat,
            float lng,
            String description,
            String thumbnailUrl,
            String mediaType,
            String formatType) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.mediaType = mediaType;
        this.formatType = formatType;
    }

    // Getters

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

    public String getMediaType() {
        return mediaType;
    }

    public String getFormatType() {
        return formatType;
    }

    public String getDescription() {
        return description;
    }
}
