package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.location.LocationAddDTO;
import com.example.playgroundv3.domain.dtos.location.LocationDTO;
import com.example.playgroundv3.services.LocationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping
    public ResponseEntity<List<LocationDTO>> getLocationsByTypeAndFormat(@RequestParam(name = "type", required = false) String type,
                                                                         @RequestParam(name = "format", required = false) String format) {

        List<LocationDTO> locations = this.locationService.getLocationsByTypeAndFormat(type, format);

        log.info("type: " + type + "; format: " + format);

        log.info(locations.stream().map(location -> location.toString()).toString());

        return ResponseEntity.ok(locations);
    }

    @PostMapping
    public ResponseEntity<String> uploadLocations(@RequestBody List<LocationAddDTO> locations){
        if(this.locationService.addLocations(locations).size() == locations.size()){
            return ResponseEntity.ok("Adding the locations went according to plan!");
        }
        return ResponseEntity.ok("There was an issue adding the locations!");
    }


}
