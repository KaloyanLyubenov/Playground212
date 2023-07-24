package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.order.OrderEditDTO;
import com.example.playgroundv3.domain.dtos.order.OrderEditInitDTO;
import com.example.playgroundv3.domain.dtos.order.OrderInitDTO;
import com.example.playgroundv3.domain.dtos.order.OrderSubmitDTO;
import com.example.playgroundv3.services.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping()
    public OrderInitDTO initOrderPage() {
        return this.orderService.initOrderPage();
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderEditInitDTO> initEditOrderPage(@PathVariable int orderId) {
        OrderEditInitDTO initDetails = this.orderService.initEditOrderPage(orderId);

        return ResponseEntity.ok(initDetails);
    }

//    @GetMapping
//    public OrderEditDTO getOrderToEdit(int orderId){
//
//    }

    @PostMapping()
    public ResponseEntity<Integer> submitOrder(@RequestBody OrderSubmitDTO order){
        int orderId = this.orderService.submitOrder(order);

        return ResponseEntity.ok(orderId);
    }

    @PatchMapping()
    public ResponseEntity<Integer> editOrder(@RequestBody OrderEditDTO order){
        this.orderService.editOrder(order);

        return ResponseEntity.ok(order.getId());
    }

}
