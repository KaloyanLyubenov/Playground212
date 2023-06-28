package com.example.playground.domain.entities;

public class ColorEntity {
    private int id;
    private String color;

    public ColorEntity(){}

    public ColorEntity(int id, String color) {
        this.id = id;
        this.color = color;
    }

    public int getId() {
        return id;
    }

    public String getColor() {
        return color;
    }
}
