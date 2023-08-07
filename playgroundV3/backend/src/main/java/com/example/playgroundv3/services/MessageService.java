package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.Message;
import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.repos.MessageRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepo messageRepo;
    private final UserService userService;

    public MessageService(MessageRepo messageRepo, UserService userService) {
        this.messageRepo = messageRepo;
        this.userService = userService;
    }

    public List<Message> getMessagesByOrderID(int orderID){
        return this.messageRepo.findAllByOrderId(orderID)
                .stream().map(
                        message -> new Message(
                                message.getId(),
                                message.getOrderID(),
                                this.userService.getUserEmailByID(message.getSenderID()),
                                this.userService.getUserEmailByID(message.getReceiverID()),
                                message.getContent())).toList();
    }

    public boolean saveMessage(Message message) {
        int senderID = this.userService.getUserIDByEmail(message.getSenderEmail());
        int receiveID = this.userService.getUserIDByEmail(message.getReceiverEmail());
        int res = this.messageRepo.saveMessage(new MessageEntity(
                message.getOrderID(), senderID, receiveID, message.getContent()
        ));
        if(res != 1){
            return false;
        }
        return true;
    }

}
