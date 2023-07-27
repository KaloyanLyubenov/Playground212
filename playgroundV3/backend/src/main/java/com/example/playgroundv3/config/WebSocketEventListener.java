package com.example.playgroundv3.config;

import com.example.playgroundv3.domain.entites.MessageEntity;
import com.example.playgroundv3.domain.enums.Status;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@Slf4j
public class WebSocketEventListener {

    private final SimpMessageSendingOperations messageTemplate;

    public WebSocketEventListener(SimpMessageSendingOperations messageTemplate) {
        this.messageTemplate = messageTemplate;
    }

    // WIth this we detect whenever a user disconnects from the webSocket
    @EventListener
    public void handleWebSocketDisconnectListener(
            SessionDisconnectEvent event
    ){
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage()); // Wrapping the event message from the session disconnect event
        String userEmail = (String) headerAccessor.getSessionAttributes().get("userEmail"); // Casting it to string because "headerAccessor.getSessionAttributes().get("userEmail")" is an object
        if(userEmail != null){
            log.info("User disconnected: {}", userEmail);
            MessageEntity message = new MessageEntity(0, userEmail, null, null, Status.LEAVE);
            this.messageTemplate.convertAndSend("/topic/public", message);
        }
    }

}
