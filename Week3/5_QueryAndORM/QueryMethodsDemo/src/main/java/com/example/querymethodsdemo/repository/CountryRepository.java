package com.example.querymethodsdemo.repository;

import com.example.querymethodsdemo.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, Long> {

    List<Country> findByNameContaining(String name);
    List<Country> findByNameStartingWith(String prefix);
    List<Country> findByPopulationGreaterThan(Long population);
    List<Country> findTop3ByOrderByPopulationDesc();
}
