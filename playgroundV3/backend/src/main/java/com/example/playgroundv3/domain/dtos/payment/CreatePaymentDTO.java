package com.example.playgroundv3.domain.dtos.payment;

public class CreatePaymentDTO {

    private int orderId;
    private String userEmail;
    private double amount;

    public CreatePaymentDTO(int orderId, String userEmail, double amount) {
        this.orderId = orderId;
        this.userEmail = userEmail;
        this.amount = amount;
    }

    public int getOrderId() {
        return orderId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public double getAmount() {
        return amount;
    }
}
