package com.example.playgroundv3.domain.dtos;

public class PictureDownloadDTO {
    private String pictureName;
    private String userEmail;

    public PictureDownloadDTO(String pictureName, String userEmail) {
        this.pictureName = pictureName;
        this.userEmail = userEmail;
    }

    public String getPictureName() {
        return pictureName;
    }

    public String getUserEmail() {
        return userEmail;
    }
}
