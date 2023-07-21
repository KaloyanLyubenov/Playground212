package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.OrderInitDTO;
import com.example.playgroundv3.services.FormatTypeService;
import com.example.playgroundv3.services.LocationService;
import com.example.playgroundv3.services.MediaTypesService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final LocationService locationService;
    private final MediaTypesService mediaTypesService;
    private final FormatTypeService formatTypeService;

    public OrderController(LocationService locationService, MediaTypesService mediaTypesService, FormatTypeService formatTypeService) {
        this.locationService = locationService;
        this.mediaTypesService = mediaTypesService;
        this.formatTypeService = formatTypeService;
    }

    @GetMapping()
    public OrderInitDTO initOrderPage() {
        OrderInitDTO orderInitDTO = new OrderInitDTO(
                this.locationService.getAllLocations(),
                this.mediaTypesService.getAllMediaTypes(),
                this.formatTypeService.getAllFormatTypeNames());

        return orderInitDTO;
    }

}
