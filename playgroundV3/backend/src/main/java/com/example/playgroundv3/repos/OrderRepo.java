package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.OrderEntity;

import java.util.List;
import java.util.Optional;

public interface OrderRepo {
    public boolean saveOrderAndLocations(OrderEntity order, List<Integer> locationIDs);
    public List<OrderEntity> findAllByUserID(int userID);
    public List<OrderEntity> findAll();
    public int updateOrderPriceByOrderID(int orderID, double price);
    public Optional<OrderEntity> findByOrderID(int orderID);
}
