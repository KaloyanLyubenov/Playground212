package com.example.playgroundv3.domain.dtos;

import org.springframework.web.multipart.MultipartFile;

public class MultiplePictureUploadDTO {
    private String albumName;
    private String ownerEmail;
    private String mediaType;
    private String timeOfDay;
    private MultipartFile[] files;

    public MultiplePictureUploadDTO(String albumName, String ownerEmail, String mediaType, String timeOfDay, MultipartFile[] files) {
        this.albumName = albumName;
        this.ownerEmail = ownerEmail;
        this.mediaType = mediaType;
        this.timeOfDay = timeOfDay;
        this.files = files;
    }

    public String getAlbumName() {
        return albumName;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public String getMediaType() {
        return mediaType;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public MultipartFile[] getFiles() {
        return files;
    }
}
