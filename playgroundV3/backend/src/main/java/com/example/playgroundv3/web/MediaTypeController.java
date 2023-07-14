package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.entites.MediaTypeEntity;
import com.example.playgroundv3.services.MediaTypesService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/media-types")
public class MediaTypeController {

    private final MediaTypesService mediaTypesService;

    public MediaTypeController(MediaTypesService mediaTypesService) {
        this.mediaTypesService = mediaTypesService;
    }

    @GetMapping
    public List<String> getAllMediaTypes() {
        return this.mediaTypesService.getAllMediaTypes();
    }
}
