package com.example.playgroundv3.web;

import com.example.playgroundv3.domain.dtos.AccountInfoDTO;
import com.example.playgroundv3.services.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/{email}")
    public ResponseEntity<AccountInfoDTO> getAccountDetails(@PathVariable String email){
        AccountInfoDTO accountInfo = this.accountService.getAccountInfo(email);

        return ResponseEntity.ok(accountInfo);
    }
}
