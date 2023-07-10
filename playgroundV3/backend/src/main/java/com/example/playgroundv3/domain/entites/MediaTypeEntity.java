package com.example.playgroundv3.domain.entites;

public class MediaTypeEntity {

    private int id;
    private String mediaType;

    // Constructors
    public MediaTypeEntity(int id, String mediaType) {
        this.id = id;
        this.mediaType = mediaType;
    }

    // Getters


    public int getId() {
        return id;
    }

    public String getMediaType() {
        return mediaType;
    }
}
