package com.example.playground.domain.entities;

public class VideoEntity {
    private int id;
    private String url;
    private String mediaType;

    public VideoEntity(){}

    public VideoEntity(int id, String url, String mediaType) {
        this.id = id;
        this.url = url;
        this.mediaType = mediaType;
    }

    public int getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }

    public String getMediaType() {
        return mediaType;
    }
}
