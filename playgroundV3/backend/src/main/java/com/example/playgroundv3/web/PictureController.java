package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.PictureAddDTO;
import com.example.playgroundv3.domain.dtos.PictureDownloadDTO;
import com.example.playgroundv3.services.PictureService;
import com.example.playgroundv3.services.S3.S3Service;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/image")
public class PictureController {
    private final S3Service s3Service;
    private final PictureService pictureService;

    public PictureController(S3Service s3Service, PictureService pictureService) {
        this.s3Service = s3Service;
        this.pictureService = pictureService;
    }

    @GetMapping
    public String getUploadUrl() {
        return this.s3Service.generateUploadUrl();
    }

//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadFile(@RequestParam(value = "file")MultipartFile file) {
//        return new ResponseEntity<>(this.s3Service.uploadFile(file), HttpStatus.OK);
//    }

    @PostMapping("/upload")
    public HttpStatus uploadFile(@RequestBody PictureAddDTO pictureDTO){
        this.pictureService.addPicture(pictureDTO);
        this.s3Service.uploadFile(pictureDTO.getFile());
        return HttpStatus.OK;
    }

//    @GetMapping("/download/{fileName}")
//    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName){
//        byte[] data = this.s3Service.downloadFile(fileName);
//        ByteArrayResource resource = new ByteArrayResource(data);
//        return ResponseEntity
//                .ok()
//                .contentLength(data.length)
//                .header("Content-type", "application/octet-stream")
//                .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
//                .body(resource);
//    }

    @GetMapping("/download")
    public ResponseEntity<ByteArrayResource> downloadFile(@RequestBody PictureDownloadDTO picDownDTO){
        if(this.pictureService.canUserDownload(picDownDTO)) {
            byte[] data = this.s3Service.downloadFile(picDownDTO.getPictureName());
            ByteArrayResource resource = new ByteArrayResource(data);
            return ResponseEntity
                    .ok()
                    .contentLength(data.length)
                    .header("Content-type", "application/octet-stream")
                    .header("Content-disposition", "attachment; filename=\"" + picDownDTO.getPictureName() + "\"")
                    .body(resource);
        }
        return null;
    }




}
