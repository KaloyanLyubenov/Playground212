package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.dtos.OrderEditDTO;
import com.example.playgroundv3.domain.dtos.OrderInitDTO;
import com.example.playgroundv3.domain.dtos.OrderSubmitDTO;
import com.example.playgroundv3.domain.entites.OrderEntity;
import com.example.playgroundv3.repos.OrderRepo;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final LocationService locationService;
    private final MediaTypesService mediaTypesService;
    private final FormatTypeService formatTypeService;
    private final OrderRepo orderRepo;

    public OrderService(LocationService locationService, MediaTypesService mediaTypesService, FormatTypeService formatTypeService, OrderRepo orderRepo) {
        this.locationService = locationService;
        this.mediaTypesService = mediaTypesService;
        this.formatTypeService = formatTypeService;
        this.orderRepo = orderRepo;
    }

    public OrderInitDTO initOrderPage() {
        OrderInitDTO orderInitDTO = new OrderInitDTO(
                this.locationService.getAllLocations(),
                this.mediaTypesService.getAllMediaTypes(),
                this.formatTypeService.getAllFormatTypeNames());

        return orderInitDTO;
    }

    public int submitOrder(OrderSubmitDTO order) {
        int result = this.orderRepo.saveOrder(new OrderEntity(order.getFirstName(), order.getLastName(), order.getEmail(), order.getPhoneNumber(), this.formatTypeService.getFormatTypeIdByName(order.getFormatType()), this.mediaTypesService.getMediaTypeIdByName(order.getMediaType())));
        if(result != 1) {
            throw new IllegalStateException("Something went wrong adding order");
        }

        int orderId = this.orderRepo.findLastAddedOrder().get().getId();
        result = this.orderRepo.saveOrderLocations(order.getLocationIDs(), orderId);

        if(result != order.getLocationIDs().size()){
            throw new IllegalStateException("Something went wrong adding locations to the order");
        }

        return orderId;
    }

    public void editOrder(OrderEditDTO order) {
        int result = this.orderRepo.updateOrder(new OrderEntity(order.getId(), order.getFirstName(), order.getLastName(), order.getEmail(), order.getPhoneNumber(), this.formatTypeService.getFormatTypeIdByName(order.getFormatType()), this.mediaTypesService.getMediaTypeIdByName(order.getMediaType())));

        if(result != 1) {
            throw new IllegalStateException("Something went wrong editing the order");
        }

        int orderId = this.orderRepo.findLastAddedOrder().get().getId();

        this.orderRepo.removeLocationsWithOrderId(order.getId());
        result = this.orderRepo.saveOrderLocations(order.getLocationIDs(), orderId);

        if(result != order.getLocationIDs().size()){
            throw new IllegalStateException("Something went wrong adding locations to the order");
        }
    }
}
