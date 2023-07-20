package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.LocationSaveDTO;
import com.example.playgroundv3.services.LocationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @PostMapping
    public ResponseEntity<String> uploadLocations(@RequestBody List<LocationSaveDTO> locations){
        this.locationService.addLocations(locations);
        return ResponseEntity.ok("Location upload complete");
    }
}
