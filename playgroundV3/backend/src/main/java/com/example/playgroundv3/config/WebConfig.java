package com.example.playgroundv3.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/pictures")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST", "GET")
                .exposedHeaders("Access-Control-Allow-Origin");
        registry.addMapping("/users/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET");
        registry.addMapping("/auth/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST");
        registry.addMapping("/media-types/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET");
        registry.addMapping("/s3/creds")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET");
        registry.addMapping("/locations")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST");
    }

}

/*
Amazon S3 bucket specs:
 - Region = eu-north-1
 - Name = kokomoko-playground-bucket
*/
