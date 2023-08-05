package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.LocationEntity;

import java.util.List;

public interface LocationRepo {

    public List<LocationEntity> findAllByFormat(String format);
    public List<LocationEntity> findAllByType(String type);
    public List<LocationEntity> findAllByFormatAndType(String format, String type);
    public List<Integer> saveLocations(List<LocationEntity> locations);
}
