package com.example.playgroundv3.domain.entites;

public class MessageEntity {

    private int id;
    private int orderID;
    private int senderID;
    private int receiverID;
    private String content;


    public MessageEntity() {
    }

    public MessageEntity(int orderID, int senderID, int receiverID, String content) {
        this.orderID = orderID;
        this.senderID = senderID;
        this.receiverID = receiverID;
        this.content = content;
    }

    public MessageEntity(int id, int orderID, String content, int senderEmail, int receiverEmail) {
        this.id = id;
        this.senderID = senderEmail;
        this.receiverID = receiverEmail;
        this.content = content;
        this.orderID = orderID;
    }

    public int getId() {
        return id;
    }

    public int getSenderID() {
        return senderID;
    }

    public int getReceiverID() {
        return receiverID;
    }

    public String getContent() {
        return content;
    }

    public int getOrderID() {
        return orderID;
    }
}
