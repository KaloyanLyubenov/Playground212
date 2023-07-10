package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;

import java.util.List;
import java.util.Optional;

public interface PictureRepo {

    public List<PictureEntity> findALlPictures();
    public List<PictureEntity> findAllPicturesByAlbum(String albumName);
    public List<PictureEntity> findAllPicturesByMediaType(int mediaTypeId);
    public Optional<PictureEntity> findPictureByOwnerID(int ownerID);
    public Optional<PictureEntity> findPictureByName(String name);

    public int savePicture(PictureModel picture);

}
