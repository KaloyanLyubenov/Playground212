package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.MediaTypeEntity;

import java.util.List;

public interface MediaTypeRepo {

    public List<MediaTypeEntity> findAllMediaTypes();

}
