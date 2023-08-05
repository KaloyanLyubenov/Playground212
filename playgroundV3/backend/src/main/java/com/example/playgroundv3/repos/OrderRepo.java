package com.example.playgroundv3.repos;

import com.example.playgroundv3.domain.entites.OrderEntity;
import org.springframework.data.relational.core.sql.In;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface OrderRepo {
    public boolean saveOrderAndLocations(OrderEntity order, List<Integer> locationIDs);
}
