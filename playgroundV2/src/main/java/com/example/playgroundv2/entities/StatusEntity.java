package com.example.playgroundv2.entities;

public class StatusEntity {
    private int id;
    private String status;

    public StatusEntity(){}

    public StatusEntity(int id, String status) {
        this.id = id;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }
}
