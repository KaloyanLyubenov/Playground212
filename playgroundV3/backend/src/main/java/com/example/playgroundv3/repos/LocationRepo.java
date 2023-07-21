package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.LocationEntity;

import java.util.List;

public interface LocationRepo {

    public int saveLocation(LocationEntity location);
    public List<LocationEntity>  findAllLocations();
}
