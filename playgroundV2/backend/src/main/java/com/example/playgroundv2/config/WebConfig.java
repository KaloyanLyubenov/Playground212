package com.example.playgroundv2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/users")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET"); // Specify the allowed HTTP methods
        registry.addMapping("/users/*")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET"); // Specify the allowed HTTP methods
        registry.addMapping("/auth/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("POST"); // Specify the allowed HTTP methods
    }

}
