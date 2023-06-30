package com.example.playgroundv2.domain.entities;

public class PictureEntity {
    private int id;
    private String url;
    private MediaTypeEntity mediaType;

    public PictureEntity(){}

    public PictureEntity(int id, String url, MediaTypeEntity mediaType) {
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

    public MediaTypeEntity getMediaType() {
        return mediaType;
    }
}
