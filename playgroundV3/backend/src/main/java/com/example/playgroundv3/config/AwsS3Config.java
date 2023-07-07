package com.example.playgroundv3.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class AwsS3Config {

    private final ApplicationConfiguration aC;

    public AwsS3Config(ApplicationConfiguration applicationConfiguration) {
        this.aC = applicationConfiguration;
    }

    @Bean
    public S3Client s3Client(){
        return S3Client.builder()
                .region(Region.EU_NORTH_1)
                .credentialsProvider(() -> AwsBasicCredentials.create(aC.getAccessKey(), aC.getSecretKey()))
                .build();
    }
}
