package com.microservices.account.controller;

import com.microservices.account.model.AccountModel;
import com.microservices.account.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<AccountModel> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping
    public AccountModel createAccount(@RequestBody AccountModel account) {
        return accountService.createAccount(account);
    }
}
