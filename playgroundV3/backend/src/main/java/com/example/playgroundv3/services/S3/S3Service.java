package com.example.playgroundv3.services.S3;

import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

@Service
public class S3Service {

    private final S3Client s3Client;
    private final String bucketName;

    public S3Service(S3Client s3Client) {
        this.s3Client = s3Client;
        this.bucketName = "kokomoko-playground-bucket";
    }

    public String generateUploadUrl() {
        String imageName = UUID.randomUUID().toString().substring(0, 10);
        Instant expirationTime = Instant.now().plus(Duration.ofMinutes(1));
        GetUrlRequest getUrlRequest = GetUrlRequest.builder()
                .bucket(this.bucketName)
                .key(imageName)
                .build();
        return this.s3Client.utilities().getUrl(getUrlRequest).toString()
                + "?X-Amz-Expires=" + Duration.between(Instant.now(), expirationTime).getSeconds();
    }


}
