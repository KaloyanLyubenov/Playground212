package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.AccountInfoDTO;
import com.example.playgroundv3.domain.models.UserModel;
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
        UserModel user =  this.userService.getUserByEmail(email);

        if(user.getRoles().contains("ADMIN")){
//            return new AccountInfoDTO(
//                    this.userService.getUserDetails(user.getId()),
//                    this.orderService.getAllOrders(),
//                    this.pictureService.getAllAlbumsByOwnerId(user.getId())
//            );
            return null;
        }

//        return new AccountInfoDTO(
//                        this.userService.getUserDetails(user.getId()),
//                        this.orderService.getOrderPreviewsByOwnerId(user.getId()),
//                        this.pictureService.getAllAlbumsByOwnerId(user.getId())
//                );

        return null;
    }
}
