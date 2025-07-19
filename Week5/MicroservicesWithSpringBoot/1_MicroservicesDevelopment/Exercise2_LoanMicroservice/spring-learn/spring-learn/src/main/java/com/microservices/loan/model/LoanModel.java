package com.microservices.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "loan")
public class LoanModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanId;

    private String customerName;
    private Double loanAmount;
    private String loanType;

    public LoanModel() {}

    public LoanModel(Long loanId, String customerName, Double loanAmount, String loanType) {
        this.loanId = loanId;
        this.customerName = customerName;
        this.loanAmount = loanAmount;
        this.loanType = loanType;
    }

    public Long getLoanId() {
        return loanId;
    }

    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(Double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }
}
