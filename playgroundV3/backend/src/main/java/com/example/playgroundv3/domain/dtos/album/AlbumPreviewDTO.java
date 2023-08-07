package com.example.playgroundv3.domain.dtos.album;

import com.example.playgroundv3.domain.dtos.picture.PicturePreviewDTO;

import java.util.List;

public class AlbumPreviewDTO {

    private String albumName;
    private String thumbnailName;
    private String timeOfDay;
    private String mediaType;
    private List<PicturePreviewDTO> pictures;

    public AlbumPreviewDTO(String albumName,
                           String thumbnailName,
                           String timeOfDay,
                           String mediaType,
                           List<PicturePreviewDTO> pictures) {
        this.albumName = albumName;
        this.thumbnailName = thumbnailName;
        this.timeOfDay = timeOfDay;
        this.mediaType = mediaType;
        this.pictures = pictures;
    }

    public AlbumPreviewDTO(String albumName, String thumbnailName, String timeOfDay, String mediaType) {
        this.albumName = albumName;
        this.thumbnailName = thumbnailName;
        this.timeOfDay = timeOfDay;
        this.mediaType = mediaType;
    }

    public String getAlbumName() {
        return albumName;
    }

    public String getThumbnailName() {
        return thumbnailName;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public String getMediaType() {
        return mediaType;
    }

    public List<PicturePreviewDTO> getPictures() {
        return pictures;
    }
}
