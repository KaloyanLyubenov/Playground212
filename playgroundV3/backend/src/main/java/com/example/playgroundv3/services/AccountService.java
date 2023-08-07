package com.example.playgroundv3.services;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final UserService userService;
    private final OrderService orderService;
    private final PictureService pictureService;

    public AccountService(UserService userService, OrderService orderService, PictureService pictureService) {
        this.userService = userService;
        this.orderService = orderService;
        this.pictureService = pictureService;
    }
}
