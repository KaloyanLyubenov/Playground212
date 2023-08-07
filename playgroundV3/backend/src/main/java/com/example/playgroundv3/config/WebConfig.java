package com.example.playgroundv3.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST", "GET", "PATCH")
                .exposedHeaders("Access-Control-Allow-Origin");
    }

}

/*
Amazon S3 bucket specs:
 - Region = eu-north-1
 - Name = kokomoko-playground-bucket
*/
