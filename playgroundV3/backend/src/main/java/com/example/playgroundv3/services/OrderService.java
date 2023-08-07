package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.order.*;
import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.repos.OrderRepo;
import com.example.playgroundv3.services.auth.JwtService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class OrderService {
    private final LocationService locationService;

    private final OrderRepo orderRepo;

    private final UserService userService;

    private final JwtService jwtService;


    public OrderService(LocationService locationService, OrderRepo orderRepo, UserService userService, JwtService jwtService) {
        this.locationService = locationService;
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

    @Transactional
    public List<OrderPreviewDTO> getOrdersForUser(String token){

        String userEmail = this.jwtService.extractUserEmail(token.substring(7));
        int userID = this.userService.getUserByEmail(userEmail).getId();

        List<OrderPreviewDTO> orders = this.orderRepo.findAllByUserID(userID).stream().map(order -> new OrderPreviewDTO(order.getId(), order.getToPay(), userEmail)).toList();

        for (OrderPreviewDTO order : orders) {
            order.setLocations(this.locationService.getLocationsForOrder(order.getId()));
        }

        return orders;
    }

    public List<OrderPreviewDTO> getAllOrders(){

        List<OrderPreviewDTO> orders = this.orderRepo.findAll().stream().map(
                order -> new OrderPreviewDTO(
                        order.getId(),
                        order.getToPay(),
                        this.userService.getUserEmailByID(
                                order.getUserId()
                        ))).toList();

        for(OrderPreviewDTO order :orders) {
            order.setLocations(this.locationService.getLocationsForOrder(order.getId()));
        }

        return orders;
    }

    public boolean setOrderPrice(int orderID, double price) {
        if (this.orderRepo.updateOrderPriceByOrderID(orderID, price) != 1){
            return false;
        }
        return true;
    }
}
