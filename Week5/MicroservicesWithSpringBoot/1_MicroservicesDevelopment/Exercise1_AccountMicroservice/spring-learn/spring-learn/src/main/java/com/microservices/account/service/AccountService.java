package com.microservices.account.service;

import com.microservices.account.model.AccountModel;
import com.microservices.account.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public List<AccountModel> getAllAccounts() {
        return accountRepository.findAll();
    }

    public AccountModel createAccount(AccountModel accountModel) {
        return accountRepository.save(accountModel);
    }
}
