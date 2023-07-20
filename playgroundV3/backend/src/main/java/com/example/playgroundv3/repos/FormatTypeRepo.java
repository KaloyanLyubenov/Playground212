package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;

import java.util.List;

public interface FormatTypeRepo {

    public List<FormatTypeEntity> findAllFormatTypes();
}
