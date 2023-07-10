package com.example.playgroundv3.domain.dtos;

import org.springframework.web.multipart.MultipartFile;

public class PictureAddDTO {
    private String name;
    private String albumName;
    private String ownerEmail;
    private int mediaTypeId;
    private MultipartFile file;

    // Constructors

    public PictureAddDTO(String name, String albumName, String ownerEmail, int mediaTypeId, MultipartFile file) {
        this.name = name;
        this.albumName = albumName;
        this.ownerEmail = ownerEmail;
        this.mediaTypeId = mediaTypeId;
        this.file = file;
    }

    // Getters

    public String getName() {
        return name;
    }

    public String getAlbumName() {
        return albumName;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public int getMediaTypeId() {
        return mediaTypeId;
    }

    public MultipartFile getFile() {
        return file;
    }
}
