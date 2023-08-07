package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.album.AlbumPreviewDTO;
import com.example.playgroundv3.domain.dtos.album.AlbumUploadDTO;
import com.example.playgroundv3.domain.dtos.order.OrderPreviewDTO;
import com.example.playgroundv3.domain.entites.AlbumEntity;
import com.example.playgroundv3.repos.AlbumRepo;
import com.example.playgroundv3.services.auth.JwtService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlbumService {

    private final AlbumRepo albumRepo;
    private final UserService userService;
    private final PictureService pictureService;
    private final JwtService jwtService;
    private final OrderService orderService;


    public AlbumService(AlbumRepo albumRepo, UserService userService, PictureService pictureService, JwtService jwtService, OrderService orderService) {
        this.albumRepo = albumRepo;
        this.userService = userService;
        this.pictureService = pictureService;
        this.jwtService = jwtService;
        this.orderService = orderService;
    }

    public boolean addAlbum(AlbumUploadDTO album){

        int albumID = this.albumRepo.saveAlbum(new AlbumEntity(album.getThumbnailPicName(), album.getAlbumName(), album.getTimeOfDay(), album.getMediaType(), album.getOrderID()));

        if(albumID == -1){
            return false;
        }

        boolean picturesSaved = this.pictureService.addPictures(album, albumID);
        if(!picturesSaved){
            return false;
        }

        return true;
    }

    public List<AlbumPreviewDTO> getAllAlbumPreviews() {
        List<AlbumEntity> albums = this.albumRepo.findAll();
        List<AlbumPreviewDTO> albumPreviews = new ArrayList<>();

        for (AlbumEntity album : albums) {
            albumPreviews.add(new AlbumPreviewDTO(
                    album.getAlbumName(),
                    album.getThumbnailPicName(),
                    album.getTimeOfDay(),
                    album.getMediaType(), this.pictureService.getAllPicturesByAlbumID(album.getId())));
        }

        return albumPreviews;
    }

    public List<AlbumPreviewDTO> getAllForUser(String token) {
        List<Integer> orderIDs = this.orderService.getOrdersForUser(token)
                .stream()
                .map(OrderPreviewDTO::getId)
                .toList();

        return orderIDs.stream()
                .flatMap(orderID -> this.albumRepo.findAllByOrderID(orderID).stream())
                .map(album -> new AlbumPreviewDTO(
                        album.getAlbumName(),
                        album.getThumbnailPicName(),
                        album.getTimeOfDay(),
                        album.getMediaType(),
                        this.pictureService.getAllPicturesByAlbumID(album.getId())))
                .collect(Collectors.toList());
    }

}
