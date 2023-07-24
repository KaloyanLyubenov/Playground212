package com.example.playgroundv3.services;

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
    private final FormatTypeService formatTypeService;
    private final MediaTypesService mediaTypesService;


    public LocationService(LocationRepo locationRepo, FormatTypeService formatTypeService, MediaTypesService mediaTypesService) {
        this.locationRepo = locationRepo;
        this.formatTypeService = formatTypeService;
        this.mediaTypesService = mediaTypesService;
    }


    public void addLocations(List<LocationSaveDTO> locations) {
        for(LocationSaveDTO location : locations) {
            int res = this.locationRepo.saveLocation(
                    new LocationEntity(
                            location.getTitle(),
                            location.getLat(),
                            location.getLng(),
                            location.getDescription(),
                            location.getThumbnailUrl(),
                            this.mediaTypesService.getMediaTypeIdByName(location.getMediaType()),
                            this.formatTypeService.getFormatTypeIdByName(location.getFormatType())
                    ));
            if( res == -1){
                throw new IllegalStateException("Something went wrong adding this location");
            }
        }
    }

    public List<LocationSendDTO> getAllLocations() {
        List<LocationEntity> locations = this.locationRepo.findAllLocations();

        return mapLocationsToLocationsToSend(locations);
    }

    public List<LocationSendDTO> getAllSelectedLocationsByOrderId(int orderId) {
        List<LocationEntity> locations = this.locationRepo.findAllByOrderId(orderId);

        return mapLocationsToLocationsToSend(locations);
    }

    private List<LocationSendDTO> mapLocationsToLocationsToSend(List<LocationEntity> locations){
        List<LocationSendDTO> locationsToSend = new ArrayList<>();

        for (int i = 0; i < locations.size(); i++) {
            LocationEntity location = locations.get(i);
            String mediaType = this.mediaTypesService.getMediaTypeNameById(location.getMediaTypeId());
            String formatType = this.formatTypeService.getFormatNameById(location.getFormatTypeId());

            locationsToSend.add(
                    new LocationSendDTO(
                            location.getId(),
                            location.getTitle(),
                            location.getLat(),
                            location.getLng(),
                            location.getDescription(),
                            location.getThumbnailUrl(),
                            mediaType,
                            formatType
                    )
            );
        }

        return locationsToSend;
    }
}
