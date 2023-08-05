package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.order.*;
import com.example.playgroundv3.services.OrderService;
import com.example.playgroundv3.services.auth.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    private final JwtService jwtService;

    public OrderController(OrderService orderService, JwtService jwtService) {
        this.orderService = orderService;
        this.jwtService = jwtService;
    }

    @PostMapping
    public ResponseEntity<Boolean> submitOrder(@RequestHeader("Authorization") String token, @RequestBody OrderPlaceDTO order){
        boolean outcome = this.orderService.placeOrder(order, token);
        return ResponseEntity.ok(outcome);
    }

    @PostMapping("/events")
    public ResponseEntity<Boolean> submitEventOrder(@RequestHeader("Authorization") String token, @RequestBody EventOrderPlaceDTO order){
        boolean outcome = this.orderService.placeEventOrder(order, token);
        return ResponseEntity.ok(outcome);
    }


}
