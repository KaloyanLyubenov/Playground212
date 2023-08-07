package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.AlbumEntity;

import java.util.List;

public interface AlbumRepo {

    public int saveAlbum(AlbumEntity album);
    public List<AlbumEntity> findAll();
    public List<AlbumEntity> findAllByOrderID(int orderID);

}
