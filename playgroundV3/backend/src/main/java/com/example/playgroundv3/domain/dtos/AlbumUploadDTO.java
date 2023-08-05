package com.example.playgroundv3.domain.dtos;

public class AlbumUploadDTO {

    private String albumName;
    private String thumbnailPicName;
    private String mediaType;
    private String timeOfDay;
    private int orderID;
    private String[] fileNames;

    public AlbumUploadDTO(String albumName, String thumbnailPicName, String mediaType, String timeOfDay, int orderID, String[] fileNames) {
        this.albumName = albumName;
        this.thumbnailPicName = thumbnailPicName;
        this.mediaType = mediaType;
        this.timeOfDay = timeOfDay;
        this.orderID = orderID;
        this.fileNames = fileNames;
    }

    public String getAlbumName() {
        return albumName;
    }

    public String getThumbnailPicName() {
        return thumbnailPicName;
    }

    public String getMediaType() {
        return mediaType;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public int getOrderID() {
        return orderID;
    }

    public String[] getFileNames() {
        return fileNames;
    }
}
