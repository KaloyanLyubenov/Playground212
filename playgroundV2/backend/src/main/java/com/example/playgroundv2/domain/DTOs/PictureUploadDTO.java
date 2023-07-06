package com.example.playgroundv2.domain.DTOs;

import org.springframework.web.multipart.MultipartFile;

public class PictureUploadDTO {
    private MultipartFile picture;
    private String mediaType;

    public PictureUploadDTO(MultipartFile picture, String mediaType) {
        this.picture = picture;
        this.mediaType = mediaType;
    }

    public MultipartFile getPicture() {
        return picture;
    }

    public String getMediaType() {
        return mediaType;
    }
}
