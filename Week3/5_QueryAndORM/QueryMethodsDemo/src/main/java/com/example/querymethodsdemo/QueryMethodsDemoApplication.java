package com.example.querymethodsdemo;

import com.example.querymethodsdemo.entity.Country;
import com.example.querymethodsdemo.repository.CountryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class QueryMethodsDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(QueryMethodsDemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(CountryRepository repo) {
        return args -> {
            repo.save(new Country(null, "India", "IN", 1400000000L));
            repo.save(new Country(null, "Indonesia", "ID", 273000000L));
            repo.save(new Country(null, "Ireland", "IE", 5000000L));
            repo.save(new Country(null, "Iran", "IR", 85000000L));
            repo.save(new Country(null, "Iceland", "IS", 366000L));

            System.out.println("Countries containing 'Ind': " + repo.findByNameContaining("Ind"));
            System.out.println("Countries starting with 'Ir': " + repo.findByNameStartingWith("Ir"));
            System.out.println("Countries with population > 100 million: " + repo.findByPopulationGreaterThan(100000000L));
            System.out.println("Top 3 populated countries: " + repo.findTop3ByOrderByPopulationDesc());
        };
    }
}
