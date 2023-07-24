package com.example.playgroundv3.domain.dtos.order;

import com.example.playgroundv3.domain.dtos.location.LocationSendDTO;

import java.util.List;

public class OrderEditInitDTO {
    private List<LocationSendDTO> locations;
    private List<LocationSendDTO> selectedLocations;
    private List<String> mediaTypes;
    private List<String> formatTypes;
    private OrderDetailsDTO orderDetails;

    public OrderEditInitDTO(List<LocationSendDTO> locations, List<LocationSendDTO> selectedLocations, List<String> mediaTypes, List<String> formatTypes, OrderDetailsDTO orderDetails) {
        this.locations = locations;
        this.selectedLocations = selectedLocations;
        this.mediaTypes = mediaTypes;
        this.formatTypes = formatTypes;
        this.orderDetails = orderDetails;
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

    public List<LocationSendDTO> getSelectedLocations() {
        return selectedLocations;
    }

    public OrderDetailsDTO getOrderDetails() {
        return orderDetails;
    }
}
