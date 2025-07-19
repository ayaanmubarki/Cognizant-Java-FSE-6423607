package com.microservices.loan.repository;

import com.microservices.loan.model.LoanModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRepository extends JpaRepository<LoanModel, Long> {
}
