package com.example.playgroundv3.domain.entites;

import com.example.playgroundv3.domain.enums.Status;

public class MessageEntity {

    private int id;
    private String senderEmail;
    private String receiverEmail;
    private String content;
    private Status type;

    public MessageEntity() {
    }

    public MessageEntity(int id, String senderEmail, String receiverEmail, String content, Status type) {
        this.id = id;
        this.senderEmail = senderEmail;
        this.receiverEmail = receiverEmail;
        this.content = content;
        this.type = type;
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

    public Status getType() {
        return type;
    }
}
