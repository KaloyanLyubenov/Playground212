package com.example.playgroundv2.domain.entities;

public class MediaTypeEntity {
    private int id;
    private String mediaType;

    public MediaTypeEntity(){}

    public MediaTypeEntity(int id, String mediaType) {
        this.id = id;
        this.mediaType = mediaType;
    }

    public int getId() {
        return id;
    }

    public String getMediaType() {
        return mediaType;
    }
}
