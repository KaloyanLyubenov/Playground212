package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.OrderEntity;

import java.util.List;
import java.util.Optional;

public interface OrderRepo {
    public int saveOrder(OrderEntity order);
    public int saveOrderLocations(List<Integer> locationIDs, int orderId);
    public Optional<OrderEntity> findLastAddedOrder();
}
