package com.example.playgroundv3.domain.dtos;

import java.util.ArrayList;
import java.util.List;

public class AlbumDTO {

    private String title;
    private List<String> urls = new ArrayList<>();

    public AlbumDTO(String title, List<String> urls) {
        this.title = title;
        this.urls = urls;
    }

    public String getTitle() {
        return title;
    }

    public List<String> getUrls() {
        return urls;
    }

    public void addPicture(String url) {
        this.urls.add(url);
    }
}
