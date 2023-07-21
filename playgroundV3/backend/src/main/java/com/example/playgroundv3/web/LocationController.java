package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.LocationSaveDTO;
import com.example.playgroundv3.domain.dtos.LocationSendDTO;
import com.example.playgroundv3.services.LocationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping
    public List<LocationSendDTO> getLocations() {
        return this.locationService.getAllLocations();
    }

    @PostMapping
    public ResponseEntity<String> uploadLocations(@RequestBody List<LocationSaveDTO> locations){
        this.locationService.addLocations(locations);
        return ResponseEntity.ok("Location upload complete");
    }


}
