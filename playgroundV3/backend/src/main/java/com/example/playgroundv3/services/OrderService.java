package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.order.*;
import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.repos.OrderRepo;
import com.example.playgroundv3.services.auth.JwtService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private final LocationService locationService;
    private final MediaTypesService mediaTypesService;
    private final FormatTypeService formatTypeService;
    private final OrderRepo orderRepo;

    private final UserService userService;

    private final JwtService jwtService;


    public OrderService(LocationService locationService, MediaTypesService mediaTypesService, FormatTypeService formatTypeService, OrderRepo orderRepo, UserService userService, JwtService jwtService) {
        this.locationService = locationService;
        this.mediaTypesService = mediaTypesService;
        this.formatTypeService = formatTypeService;
        this.orderRepo = orderRepo;
        this.userService = userService;
        this.jwtService = jwtService;
    }


    public Boolean placeOrder(OrderPlaceDTO order, String jwtToken) {
        int userId =
                this.userService.getUserByEmail(
                        this.jwtService.extractUserEmail(jwtToken.substring(7)))
                        .getId();

        return this.orderRepo.saveOrderAndLocations(
                new OrderEntity(
                        userId,
                        order.getFormat(),
                        order.getType(),
                        "submitted",
                        0.00
                ), order.getLocationIDs());
    }

    public Boolean placeEventOrder(EventOrderPlaceDTO order, String token) {
        int userId =
                this.userService.getUserByEmail(
                                this.jwtService.extractUserEmail(token.substring(7)))
                        .getId();


        List<Integer> locationIDs = this.locationService.addLocations(order.getLocations());

        return placeOrder(new OrderPlaceDTO(order.getFormat(), order.getType(), locationIDs), token);
    }
}
