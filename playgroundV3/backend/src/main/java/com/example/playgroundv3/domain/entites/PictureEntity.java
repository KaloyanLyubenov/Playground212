package com.example.playgroundv3.domain.entites;

public class PictureEntity {

    private int id;
    private String name;
    private int albumID;
    private int ownerId;
    private boolean paidFor;

    // Constructor

    public PictureEntity(
            int id,
            String name,
            int albumID,
            int ownerId,
            boolean paidFor) {
        this.id = id;
        this.name = name;
        this.albumID = albumID;
        this.ownerId = ownerId;
        this.paidFor = paidFor;
    }

    public PictureEntity(int id, String name, int albumID, boolean paidFor) {
        this.id = id;
        this.name = name;
        this.albumID = albumID;
        this.paidFor = paidFor;
    }

    public PictureEntity(String name, int albumID, boolean paidFor) {
        this.name = name;
        this.albumID = albumID;
        this.paidFor = paidFor;
    }

    // Getters

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public int getAlbumID() {
        return this.albumID;
    }

    public int getOwnerId() {
        return this.ownerId;
    }

    public boolean isPaidFor() {
        return paidFor;
    }
}
