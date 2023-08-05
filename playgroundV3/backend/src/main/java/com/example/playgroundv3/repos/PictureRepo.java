package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;

import java.util.List;
import java.util.Optional;

public interface PictureRepo {

    public int[] savePictures(List<PictureEntity> pictures);

}
