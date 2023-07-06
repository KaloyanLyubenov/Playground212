package com.example.playgroundv2.repos;

import com.example.playgroundv2.domain.entities.MediaTypeEntity;
import com.example.playgroundv2.domain.entities.PictureEntity;

import java.util.List;

public interface PictureRepo {
    List<PictureEntity> findAllPictures();
    List<PictureEntity> findALlPicturesByMediaType(MediaTypeEntity type);
    int insertPicture(PictureEntity picture);
    int deletePicture(Long id);
}
