package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.AccountInfoDTO;
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

    public AccountInfoDTO getAccountInfo(String email) {
        int userId = this.userService.getUserByEmail(email).getId();

        return new AccountInfoDTO(
                        this.userService.getUserDetails(userId),
                        this.orderService.getOrderPreviewsByOwnerId(userId),
                        this.pictureService.getAllAlbumsByOwnerId(userId)
                );
    }
}
