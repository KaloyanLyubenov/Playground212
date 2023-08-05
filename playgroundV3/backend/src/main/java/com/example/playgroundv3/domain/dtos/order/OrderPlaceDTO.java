package com.example.playgroundv3.domain.dtos.order;

import java.util.List;

public class OrderPlaceDTO {
    private String format;
    private String type;
    private List<Integer> locationIDs;

    public OrderPlaceDTO(String format, String type, List<Integer> locationIDs) {
        this.format = format;
        this.type = type;
        this.locationIDs = locationIDs;
    }

    public String getFormat() {
        return format;
    }

    public String getType() {
        return type;
    }

    public List<Integer> getLocationIDs() {
        return locationIDs;
    }
}
