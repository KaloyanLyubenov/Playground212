package com.example.playgroundv3.domain.models;

public class PictureModel {
    private String name;
    private String albumName;
    private int ownerId;
    private int mediaTypeId;

    // Constructors

    public PictureModel(
            String name,
            String albumName,
            int ownerId,
            int mediaTypeId) {
        this.name = name;
        this.albumName = albumName;
        this.ownerId = ownerId;
        this.mediaTypeId = mediaTypeId;
    }

    // Getters

    public String getName() {
        return name;
    }

    public String getAlbumName() {
        return albumName;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public int getMediaTypeId() {
        return mediaTypeId;
    }
}
