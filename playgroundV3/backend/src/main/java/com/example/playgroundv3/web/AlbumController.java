package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.AlbumUploadDTO;
import com.example.playgroundv3.services.AlbumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/albums")
public class AlbumController {

    private final AlbumService albumService;

    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @PostMapping
    public ResponseEntity<Boolean> uploadAlbum(@RequestBody AlbumUploadDTO album){
        return ResponseEntity.ok(this.albumService.addAlbum(album));
    }
}
