package com.example.playgroundv3.domain.dtos;

import com.example.playgroundv3.domain.enums.Status;

public class Message {

    private String senderName;
    private String receiverName;
    private String message;
    private Status status;

    public Message() {
    }

    public Message(String senderName, String receiverName, String message, Status status) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.status = status;
        this.message = message;
    }

    public String getSenderName() {
        return senderName;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public String getMessage() {
        return message;
    }

    public Status getStatus() {
        return status;
    }
}
