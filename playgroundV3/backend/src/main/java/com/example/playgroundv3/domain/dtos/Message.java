package com.example.playgroundv3.domain.dtos;

public class Message {

    int id;
    int orderID;
    private String senderEmail;
    private String receiverEmail;
    private String content;

    public Message() {
    }

    public Message(int id, int orderID, String senderEmail, String receiverEmail, String message) {
        this.id = id;
        this.orderID = orderID;
        this.senderEmail = senderEmail;
        this.receiverEmail = receiverEmail;
        this.content = message;
    }

    public int getId() {
        return id;
    }
    public int getOrderID() {
        return orderID;
    }
    public String getSenderEmail() {
        return senderEmail;
    }

    public String getReceiverEmail() {
        return receiverEmail;
    }

    public String getContent() {
        return content;
    }

}
