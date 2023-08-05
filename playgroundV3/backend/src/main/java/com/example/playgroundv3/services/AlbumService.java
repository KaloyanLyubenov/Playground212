package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.AlbumUploadDTO;
import com.example.playgroundv3.domain.dtos.MultiplePictureUploadDTO;
import com.example.playgroundv3.domain.entites.AlbumEntity;
import com.example.playgroundv3.repos.AlbumRepo;
import org.springframework.stereotype.Service;

@Service
public class AlbumService {

    private final AlbumRepo albumRepo;
    private final UserService userService;
    private final PictureService pictureService;

    public AlbumService(AlbumRepo albumRepo, UserService userService, PictureService pictureService) {
        this.albumRepo = albumRepo;
        this.userService = userService;
        this.pictureService = pictureService;
    }

    public boolean addAlbum(AlbumUploadDTO album){

        int albumID = this.albumRepo.saveAlbum(new AlbumEntity(album.getThumbnailPicName(), album.getAlbumName(), album.getTimeOfDay(), album.getMediaType(), album.getOrderID()));

        if(albumID == -1){
            return false;
        }

        boolean picturesSaved = this.pictureService.addPictures(album, albumID);
        if(!picturesSaved){
            return false;
        }

        return true;
    }
}
