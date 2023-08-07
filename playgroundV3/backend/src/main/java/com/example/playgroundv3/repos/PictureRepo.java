package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.PictureEntity;

import java.util.List;

public interface PictureRepo {

    public int[] savePictures(List<PictureEntity> pictures);

}
