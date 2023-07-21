package com.example.playgroundv3.domain.dtos;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;
import com.example.playgroundv3.domain.entites.MediaTypeEntity;

import java.util.List;

public class OrderInitDTO {

    private List<LocationSendDTO> locations;
    private List<String> mediaTypes;
    private List<String> formatTypes;

    public OrderInitDTO(List<LocationSendDTO> locations, List<String> mediaTypes, List<String> formatTypes) {
        this.locations = locations;
        this.mediaTypes = mediaTypes;
        this.formatTypes = formatTypes;
    }

    public List<LocationSendDTO> getLocations() {
        return locations;
    }

    public List<String> getMediaTypes() {
        return mediaTypes;
    }

    public List<String> getFormatTypes() {
        return formatTypes;
    }
}
