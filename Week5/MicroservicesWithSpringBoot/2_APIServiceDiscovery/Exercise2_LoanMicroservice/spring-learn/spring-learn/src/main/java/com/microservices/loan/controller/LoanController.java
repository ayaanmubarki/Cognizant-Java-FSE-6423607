package com.microservices.loan.controller;

import com.microservices.loan.model.LoanModel;
import com.microservices.loan.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "*")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping
    public List<LoanModel> getAllLoans() {
        return loanService.getAllLoans();
    }

    @GetMapping("/{id}")
    public LoanModel getLoanById(@PathVariable Long id) {
        return loanService.getLoanById(id);
    }

    @PostMapping
    public LoanModel createLoan(@RequestBody LoanModel loan) {
        return loanService.createLoan(loan);
    }
}
