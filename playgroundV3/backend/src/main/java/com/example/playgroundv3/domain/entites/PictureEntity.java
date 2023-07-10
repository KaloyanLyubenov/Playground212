package com.example.playgroundv3.domain.entites;

public class PictureEntity {

    private int id;
    private String name;
    private String albumName;
    private int ownerId;
    private int mediaTypeId;

    // Constructor

    public PictureEntity(
            int id,
            String name,
            String albumName,
            int ownerId,
            int mediaTypeId
    ) {
        this.id = id;
        this.name = name;
        this.albumName = albumName;
        this.ownerId = ownerId;
        this.mediaTypeId = mediaTypeId;
    }

    public PictureEntity(int id, String name, String album_name) {
        this.id = id;
        this.name = name;
        this.albumName = album_name;
    }

    // Getters

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getAlbumName() {
        return this.albumName;
    }

    public int getOwnerId() {
        return this.ownerId;
    }

    public int getMediaTypeId() {
        return this.mediaTypeId;
    }
}
