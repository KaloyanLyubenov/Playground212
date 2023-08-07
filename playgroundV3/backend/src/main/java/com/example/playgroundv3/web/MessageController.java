package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.Message;
import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.services.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping
    public ResponseEntity<List<Message>> getMessages(@RequestParam(name = "orderid") int orderID) {
        return ResponseEntity.ok(this.messageService.getMessagesByOrderID(orderID));
    }
}
