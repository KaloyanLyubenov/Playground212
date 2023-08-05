package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.location.LocationAddDTO;
import com.example.playgroundv3.domain.dtos.location.LocationPreviewDTO;
import com.example.playgroundv3.domain.dtos.location.LocationSaveDTO;
import com.example.playgroundv3.domain.dtos.location.LocationSendDTO;
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
    public ResponseEntity<List<LocationPreviewDTO>> getLocations(@RequestParam(name = "type", required = false) String type,
                                                                 @RequestParam(name = "format", required = false) String format) {
        return ResponseEntity.ok(this.locationService.getLocationsByTypeAndFormat(type, format));
    }

    @PostMapping
    public ResponseEntity<String> uploadLocations(@RequestBody List<LocationAddDTO> locations){
        if(this.locationService.addLocations(locations).size() == locations.size()){
            return ResponseEntity.ok("Adding the locations went according to plan!");
        }
        return ResponseEntity.ok("There was an issue adding the locations!");
    }


}
