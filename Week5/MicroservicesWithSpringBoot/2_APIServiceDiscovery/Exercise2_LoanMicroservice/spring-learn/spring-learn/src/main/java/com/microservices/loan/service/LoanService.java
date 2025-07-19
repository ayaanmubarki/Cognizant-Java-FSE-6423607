package com.microservices.loan.service;

import com.microservices.loan.model.LoanModel;
import com.microservices.loan.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<LoanModel> getAllLoans() {
        return loanRepository.findAll();
    }

    public LoanModel getLoanById(Long id) {
        return loanRepository.findById(id).orElse(null);
    }

    public LoanModel createLoan(LoanModel loan) {
        return loanRepository.save(loan);
    }
}
