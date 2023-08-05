package com.example.playgroundv3.domain.dtos.payment;

public class CreatePaymentResponseDTO {

    private String clientSecret;

    public CreatePaymentResponseDTO(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public String getClientSecret() {
        return clientSecret;
    }
}
