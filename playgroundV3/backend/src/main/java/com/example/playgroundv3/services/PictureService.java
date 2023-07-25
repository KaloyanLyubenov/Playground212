package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.AlbumDTO;
import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.dtos.PictureDownloadDTO;
import com.example.playgroundv3.domain.dtos.auth.MultiplePictureUploadDTO;
import com.example.playgroundv3.domain.entites.PictureEntity;
import com.example.playgroundv3.domain.models.PictureModel;
import com.example.playgroundv3.repos.PictureRepo;
import com.example.playgroundv3.services.S3.S3Service;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class PictureService {

    private final PictureRepo pictureRepo;
    private final UserService userService;
    private final S3Service s3Service;
    private final MediaTypesService mediaTypesService;

    public PictureService(PictureRepo pictureRepo, UserService userService, S3Service s3Service, MediaTypesService mediaTypesService) {
        this.pictureRepo = pictureRepo;
        this.userService = userService;
        this.s3Service = s3Service;
        this.mediaTypesService = mediaTypesService;
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

    public List<String> getAllPictureNames() {
        return this.pictureRepo.findALlPictures()
                .stream().map(PictureEntity::getName)
                .toList();
    }

    public List<AlbumDTO> getAllAlbumsByOwnerId(int userId) {
        Map<String, List<String>> albumPicUrls = new HashMap<>();

        for(PictureEntity pic : this.pictureRepo.findAllByOwnerID(userId)){
            if(!albumPicUrls.containsKey(pic.getAlbumName())){
                //albumNameAlbums.put(pic.getAlbumName(), new AlbumDTO(pic.getAlbumName(), List.of(pic.getName())));
                albumPicUrls.put(pic.getAlbumName(), new ArrayList<>(List.of(pic.getName())));
            }else{
                //albumNameAlbums.get(pic.getAlbumName()).addPicture(pic.getName());
                albumPicUrls.get(pic.getAlbumName()).add(pic.getName());
            }
        }

        List<AlbumDTO> albums = new ArrayList<>();
        for(Map.Entry<String, List<String>> entry : albumPicUrls.entrySet()){
            albums.add(new AlbumDTO(entry.getKey(), entry.getValue()));
        }

        return albums;
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

    public void uploadPictures(MultiplePictureUploadDTO pictures){
        MultipartFile[] files = pictures.getFiles();
        for(MultipartFile file : files){
            String fileName = this.s3Service.uploadFile(file);
            this.addPicture(new PictureAddDTO(fileName, pictures.getAlbumName(), pictures.getOwnerEmail(), this.mediaTypesService.getMediaTypeIdByName(pictures.getMediaType()), file));
        }
    }

    private void addPicture(PictureAddDTO pictureDTO){
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
