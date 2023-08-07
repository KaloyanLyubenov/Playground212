package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.MessageEntity;

import java.util.List;

public interface MessageRepo {

    public List<MessageEntity> findAllByOrderId(int orderID);
    public int saveMessage(MessageEntity message);
}
