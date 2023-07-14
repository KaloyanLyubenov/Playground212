package com.example.playgroundv3.domain.dtos.auth;

import org.springframework.web.multipart.MultipartFile;

public class MultiplePictureUploadDTO {
    private String albumName;
    private String ownerEmail;
    private String mediaType;
    private MultipartFile[] files;

    public MultiplePictureUploadDTO(String albumName, String ownerEmail, String mediaType, MultipartFile[] files) {
        this.albumName = albumName;
        this.ownerEmail = ownerEmail;
        this.mediaType = mediaType;
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

    public MultipartFile[] getFiles() {
        return files;
    }
}
