package com.example.playgroundv3.domain.dtos.order;

public class OrderPreviewDTO {

    private int id;
    private String title;

    public OrderPreviewDTO(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
