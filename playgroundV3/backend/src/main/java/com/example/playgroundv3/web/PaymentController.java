package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.payment.CreatePaymentDTO;
import com.example.playgroundv3.domain.dtos.payment.CreatePaymentResponseDTO;
import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class PaymentController {
    private static final String STRIPE_SECRET_KEY = "sk_test_51NYmMyLMC3ow1qJyIX9gKXBemOFF5wRGrrnOd29RCcueFzpWW4YnkGkaktC0yHcUYphL76PcC5ZIHSATLFBYQrsP00UwCQf4Tq";

    @PostMapping("/create-payment-intent")
    public ResponseEntity<CreatePaymentResponseDTO> createPaymentIntent(@RequestBody CreatePaymentDTO createPayment) {
        Stripe.apiKey = STRIPE_SECRET_KEY;

        PaymentIntentCreateParams params =
                PaymentIntentCreateParams
                        .builder()
                        .setAmount((long)(createPayment.getAmount() * 100L))
                        .setCurrency("bgn")
                        .setAutomaticPaymentMethods(
                                PaymentIntentCreateParams.AutomaticPaymentMethods.builder().setEnabled(true).build()
                        )
                        .build();

        PaymentIntent paymentIntent;
        try{
            paymentIntent = PaymentIntent.create(params);
        } catch (Exception e){
            return null;
        }
        CreatePaymentResponseDTO createPaymentResponseDTO = new CreatePaymentResponseDTO(paymentIntent.getClientSecret());

        return ResponseEntity.ok(createPaymentResponseDTO);
    }
}
