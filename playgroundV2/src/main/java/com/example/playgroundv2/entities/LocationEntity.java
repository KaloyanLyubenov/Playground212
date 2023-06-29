package com.example.playgroundv2.entities;

import java.util.List;

public class LocationEntity {
    private int id;
    private double latitude;
    private double longitude;
    private int thumbnailId;
    private List<Integer> suitableColorIds;

    public LocationEntity(){}

    public LocationEntity(int id, double latitude, double longitude, int thumbnailId, List<Integer> suitableColorIds) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.thumbnailId = thumbnailId;
        this.suitableColorIds = suitableColorIds;
    }

    public int getId() {
        return id;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public int getThumbnailId() {
        return thumbnailId;
    }

    public List<Integer> getSuitableColorIds() {
        return suitableColorIds;
    }
}
