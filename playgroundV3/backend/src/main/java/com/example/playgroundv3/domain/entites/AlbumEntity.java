package com.example.playgroundv3.domain.entites;

public class AlbumEntity {
    private int id;
    private String thumbnailPicName;
    private String albumName;
    private String timeOfDay;
    private String mediaType;
    private int orderID;

    public AlbumEntity(int id, String thumbnailPicName, String albumName, String timeOfDay, String mediaType, int orderID) {
        this.id = id;
        this.thumbnailPicName = thumbnailPicName;
        this.albumName = albumName;
        this.timeOfDay = timeOfDay;
        this.mediaType = mediaType;
        this.orderID = orderID;
    }

    public AlbumEntity(String thumbnailPicID, String albumName, String timeOfDay, String mediaType, int orderID) {
        this.thumbnailPicName = thumbnailPicID;
        this.albumName = albumName;
        this.timeOfDay = timeOfDay;
        this.mediaType = mediaType;
        this.orderID = orderID;
    }

    public AlbumEntity(String albumName, String timeOfDay, String mediaType, int orderID) {
        this.albumName = albumName;
        this.timeOfDay = timeOfDay;
        this.mediaType = mediaType;
        this.orderID = orderID;
    }

    public int getId() {
        return id;
    }

    public String getThumbnailPicName() {
        return thumbnailPicName;
    }

    public String getAlbumName() {
        return albumName;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public String getMediaType() {
        return mediaType;
    }

    public int getOrderID() {
        return orderID;
    }
}

