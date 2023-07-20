package com.example.playgroundv3.domain.entites;

public class FormatTypeEntity {
    private int id;
    private String formatType;

    public FormatTypeEntity(int id, String formatType) {
        this.id = id;
        this.formatType = formatType;
    }

    // Getters

    public int getId() {
        return id;
    }

    public String getFormatType() {
        return formatType;
    }
}
