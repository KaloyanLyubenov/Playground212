package com.example.playgroundv3.web;

import com.example.playgroundv3.services.S3.S3Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageUploadController {
    private final S3Service s3Service;

    public ImageUploadController(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    @GetMapping("/image-upload")
    public String getUploadUrl() {
        return this.s3Service.generateUploadUrl();
    }
}
