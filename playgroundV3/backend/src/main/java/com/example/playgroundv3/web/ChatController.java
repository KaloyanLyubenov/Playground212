package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.Message;
import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.services.MessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
@Slf4j
public class ChatController {

    private final MessageService messageService;

    public ChatController(MessageService messageService) {
        this.messageService = messageService;
    }

    // Method to add a user / When a new user connects - we need to hit this endpoint and notify all other users of this event

    @MessageMapping("/chat.addUser") // What is the url that we want to use to call on this function
    @SendTo("/topic/public") // To which queue we want to send this message
    public MessageEntity addUser(
            @Payload MessageEntity message,
            SimpMessageHeaderAccessor headerAccessor
    ) {
        headerAccessor.getSessionAttributes().put("userEmail", message.getSenderID()); // Adds the user email to the websocket session
        return message;
    }

    // Method to send a message - Will dispatch the message that will be sent by any user

    @MessageMapping("/chat.sendMessage") // What is the url that we want to use to call on this function
    @SendTo("/topic/public") // To which queue we want to send this message
    public Message sendMessage(
            @Payload Message message
    ) {
        log.info("Message from {} received with content {}", message.getSenderEmail(), message.getContent());
        this.messageService.saveMessage(message);
        return message;
    }
}
