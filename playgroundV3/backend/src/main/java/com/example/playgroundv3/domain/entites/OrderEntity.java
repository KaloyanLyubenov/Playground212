package com.example.playgroundv3.domain.entites;

public class OrderEntity {
    private int id;
    private int userId;
    private String format;
    private String type;
    private String status;
    private Double toPay;

    public OrderEntity(int id, int userId, String format, String type, String status, Double toPay) {
        this.id = id;
        this.userId = userId;
        this.format = format;
        this.type = type;
        this.status = status;
        this.toPay = toPay;
    }

    public OrderEntity(int userId, String format, String type, String status, Double toPay) {
        this.userId = userId;
        this.format = format;
        this.type = type;
        this.status = status;
        this.toPay = toPay;

    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public String getFormat() {
        return format;
    }

    public String getType() {
        return type;
    }

    public String getStatus() {
        return status;
    }

    public Double getToPay() {
        return toPay;
    }
}