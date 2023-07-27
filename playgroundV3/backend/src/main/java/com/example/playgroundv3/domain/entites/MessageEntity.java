package com.example.playgroundv3.domain.entites;

import com.example.playgroundv3.domain.enums.Status;

public class MessageEntity {

    private int id;
    private String senderEmail;
    private String receiverEmail;
    private String content;
    private String orderName;

    public MessageEntity() {
    }

    public MessageEntity(int id, String senderEmail, String receiverEmail, String content, String orderName) {
        this.id = id;
        this.senderEmail = senderEmail;
        this.receiverEmail = receiverEmail;
        this.content = content;
        this.orderName = orderName;
    }

    public int getId() {
        return id;
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

    public String getOrderName() {
        return orderName;
    }
}
