package com.country.service;

import com.country.model.Country;
import com.country.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repo;

    public List<Country> getAllCountries() {
        return repo.findAll();
    }

    public Country getByCode(String code) {
        return repo.findByCode(code);
    }

    public Country addCountry(Country country) {
        return repo.save(country);
    }

    public void deleteByCode(String code) {
        repo.deleteById(code);
    }
}
