package com.example.playgroundv3.web;

import com.example.playgroundv3.config.ApplicationConfiguration;
import com.example.playgroundv3.domain.dtos.S3DTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/s3")
public class S3Controller {

    private final ApplicationConfiguration aC;

    public S3Controller(ApplicationConfiguration aC) {
        this.aC = aC;
    }

    @GetMapping("/creds")
    public S3DTO getBucketDetails() {
        return new S3DTO(aC.getBucketName(), aC.getRegion(), aC.getAccessKey(), aC.getSecretKey());
    }


}
