package com.example.playgroundv3.services.S3;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.Objects;
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

    public String uploadFile(MultipartFile file){
        File fileObj = convertMultiPartFileToFile(file);
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        this.s3Client.putObject(PutObjectRequest.builder()
                        .bucket(this.bucketName)
                        .key(fileName)
                        .build(), RequestBody.fromFile(fileObj));
        fileObj.delete();
        return fileName;
    }

    public byte[] downloadFile(String fileName){
        ResponseBytes<GetObjectResponse> responseBytes = this.s3Client.getObjectAsBytes(GetObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build());
        return responseBytes.asByteArray();
    }

    public String deleteFile(String fileName){
        this.s3Client.deleteObject(builder -> builder.bucket(this.bucketName).key(fileName));
        return fileName + " deleted";
    }

    private File convertMultiPartFileToFile(MultipartFile file) {
        File convertedFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return convertedFile;
    }


}
