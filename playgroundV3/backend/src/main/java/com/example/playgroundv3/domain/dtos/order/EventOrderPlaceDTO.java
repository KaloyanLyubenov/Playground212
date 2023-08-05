package com.example.playgroundv3.domain.dtos.order;

import com.example.playgroundv3.domain.dtos.location.LocationAddDTO;

import java.util.List;

public class EventOrderPlaceDTO {

    private String format;
    private String type;
    private List<LocationAddDTO> locations;

    public EventOrderPlaceDTO(String format, String type, List<LocationAddDTO> locations) {
        this.format = format;
        this.type = type;
        this.locations = locations;
    }

    public String getFormat() {
        return format;
    }

    public String getType() {
        return type;
    }

    public List<LocationAddDTO> getLocations() {
        return locations;
    }
}
