package com.example.playgroundv3.domain.dtos;

public class S3DTO {
    private String bucketName;
    private String region;
    private String accessKey;
    private String secretKey;

    public S3DTO(String bucketName, String region, String accessKey, String secretKey) {
        this.bucketName = bucketName;
        this.region = region;
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    public String getBucketName() {
        return bucketName;
    }

    public String getRegion() {
        return region;
    }

    public String getAccessKey() {
        return accessKey;
    }

    public String getSecretKey() {
        return secretKey;
    }
}
