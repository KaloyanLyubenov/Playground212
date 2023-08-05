package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.location.LocationAddDTO;
import com.example.playgroundv3.domain.dtos.location.LocationPreviewDTO;
import com.example.playgroundv3.domain.dtos.location.LocationSaveDTO;
import com.example.playgroundv3.domain.dtos.location.LocationSendDTO;
import com.example.playgroundv3.domain.entites.LocationEntity;
import com.example.playgroundv3.repos.LocationRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {

    private final LocationRepo locationRepo;


    public LocationService(LocationRepo locationRepo, FormatTypeService formatTypeService, MediaTypesService mediaTypesService) {
        this.locationRepo = locationRepo;
    }


    public List<Integer> addLocations(List<LocationAddDTO> locations) {
        List<LocationEntity> locationEntities = new ArrayList<>();
        for(LocationAddDTO location : locations) {
            locationEntities.add(new LocationEntity(location.getTitle(), location.getDescription(), location.getType(), location.getFormat(), location.getTimeOfDay(), location.getLat(), location.getLng()));
        }

        return this.locationRepo.saveLocations(locationEntities);
    }


    public List<LocationPreviewDTO> getLocationsByTypeAndFormat(String type, String format){
        List<LocationEntity> locationEntities = new ArrayList<>();

        if(type.equals("")){
            locationEntities = this.locationRepo.findAllByFormat(format);
        }else if(format.equals("")){
            locationEntities = this.locationRepo.findAllByType(type);
        }else{
            locationEntities = this.locationRepo.findAllByFormatAndType(format, type);
        }

        return locationEntities.stream().map((locationEntity) -> new LocationPreviewDTO(locationEntity.getId(), locationEntity.getTitle(), locationEntity.getDescription(), locationEntity.getTimeOfDay(), locationEntity.getLat(), locationEntity.getLng())).toList();
    }

}
