package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.LocationEntity;

public interface LocationRepo {

    public int saveLocation(LocationEntity location);
}
