package com.example.playgroundv3.domain.dtos;

import com.example.playgroundv3.domain.dtos.order.OrderPreviewDTO;
import com.example.playgroundv3.domain.dtos.user.UserDetailsDTO;

import java.util.List;

public class AccountInfoDTO {

    private UserDetailsDTO userDetails;
    private List<OrderPreviewDTO> orders;
    private List<AlbumDTO> albums;
    public AccountInfoDTO(UserDetailsDTO userDetails, List<OrderPreviewDTO> orders, List<AlbumDTO> albums) {
        this.userDetails = userDetails;
        this.orders = orders;
        this.albums = albums;
    }

    public UserDetailsDTO getUserDetails() {
        return userDetails;
    }

    public List<OrderPreviewDTO> getOrders() {
        return orders;
    }

    public List<AlbumDTO> getAlbums() {
        return albums;
    }
}
