package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.dtos.PictureDownloadDTO;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;
import com.example.playgroundv3.repos.PictureRepo;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class PictureService {

    private final PictureRepo pictureRepo;
    private final UserService userService;

    public PictureService(PictureRepo pictureRepo, UserService userService) {
        this.pictureRepo = pictureRepo;
        this.userService = userService;
    }

    public List<PictureModel> getAllPictures() {
        return this.pictureRepo.findALlPictures()
                .stream().map(pictureEntity ->
                        new PictureModel(
                                pictureEntity.getName(),
                                pictureEntity.getAlbumName(),
                                pictureEntity.getOwnerId(),
                                pictureEntity.getMediaTypeId()
                        )
                ).toList();
    }

    public List<PictureModel> getAllPicturesByAlbum(String albumName) {
        return this.pictureRepo.findAllPicturesByAlbum(albumName)
                .stream().map(pictureEntity ->
                        new PictureModel(
                                pictureEntity.getName(),
                                pictureEntity.getAlbumName(),
                                pictureEntity.getOwnerId(),
                                pictureEntity.getMediaTypeId()
                        )
                ).toList();
    }

    public List<PictureModel> getAllPicturesByMediaType(int mediaTypeId) {
        return this.pictureRepo.findAllPicturesByMediaType(mediaTypeId)
                .stream().map(pictureEntity ->
                        new PictureModel(
                                pictureEntity.getName(),
                                pictureEntity.getAlbumName(),
                                pictureEntity.getOwnerId(),
                                pictureEntity.getMediaTypeId()
                        )
                ).toList();
    }

    public void addPicture(PictureAddDTO pictureDTO){
        int res = this.pictureRepo.savePicture(
                new PictureModel(
                        pictureDTO.getName(),
                        pictureDTO.getAlbumName(),
                        this.userService
                                .getUserByEmail(pictureDTO.getOwnerEmail())
                                .getId(),
                        pictureDTO.getMediaTypeId()
                )
        );
        if(res != 1){
            throw new IllegalStateException("Something went wrong adding this picture");
        }
    }

    public boolean canUserDownload(PictureDownloadDTO picDownDTO){
        Optional<PictureEntity> optionalPic = this.pictureRepo.findPictureByName(picDownDTO.getPictureName());
        if(optionalPic.isEmpty()){
            throw new IllegalStateException("No image found with this name");
        }
        return optionalPic.get().getOwnerId() == this.userService.getUserByEmail(picDownDTO.getUserEmail()).getId();
    }
}
