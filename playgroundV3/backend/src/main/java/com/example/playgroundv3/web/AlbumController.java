package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.album.AlbumPreviewDTO;
import com.example.playgroundv3.domain.dtos.album.AlbumUploadDTO;
import com.example.playgroundv3.services.AlbumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/all")
    public ResponseEntity<List<AlbumPreviewDTO>> allAlbums(){
        return ResponseEntity.ok(this.albumService.getAllAlbumPreviews());
    }

    @GetMapping
        public ResponseEntity<List<AlbumPreviewDTO>> allAlbumsForUser(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok(this.albumService.getAllForUser(token));
    }
}
