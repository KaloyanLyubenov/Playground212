package com.example.playgroundv2.domain.entities;

public class MessageEntity {
    private int id;
    private String content;
    private int senderId;
    private int receiverId;

    public MessageEntity(){}
    public MessageEntity(int id, String content, int sender_id, int receiver_id) {
        this.id = id;
        this.content = content;
        this.senderId = sender_id;
        this.receiverId = receiver_id;
    }

    public int getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public int getSenderId() {
        return senderId;
    }

    public int getReceiverId() {
        return receiverId;
    }
}
