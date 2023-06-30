package com.example.playgroundv2.domain.entities;

import java.util.List;

public class OrderEntity {
    private int id;
    private String title;
    private String comment;
    private int submitterId;
    private StatusEntity status;
    private String mediaType;
    private List<Integer> locationIds;

    public OrderEntity(){}

    public OrderEntity(int id, String title, String comment, int submitterId, StatusEntity status, String mediaType, List<Integer> locationIds) {
        this.id = id;
        this.title = title;
        this.comment = comment;
        this.submitterId = submitterId;
        this.status = status;
        this.mediaType = mediaType;
        this.locationIds = locationIds;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getComment() {
        return comment;
    }

    public int getSubmitterId() {
        return submitterId;
    }

    public StatusEntity getStatus() {
        return status;
    }

    public String getMediaType() {
        return mediaType;
    }

    public List<Integer> getLocationIds() {
        return locationIds;
    }
}
