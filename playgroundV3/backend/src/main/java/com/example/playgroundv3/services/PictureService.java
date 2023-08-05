package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.*;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.repos.PictureRepo;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PictureService {

    private final PictureRepo pictureRepo;

    public PictureService(PictureRepo pictureRepo, UserService userService, MediaTypesService mediaTypesService) {
        this.pictureRepo = pictureRepo;
    }

    public boolean addPictures(AlbumUploadDTO album, int albumID){
        List<PictureEntity> pictures = new ArrayList<>();
        for(String picName : album.getFileNames()){
            pictures.add(new PictureEntity(picName, albumID, false));
        }

        int[] res = this.pictureRepo.savePictures(pictures);

        for(int i : res){
            if(i != 1){
                return false;
            }
        }

        return true;
    }


}
