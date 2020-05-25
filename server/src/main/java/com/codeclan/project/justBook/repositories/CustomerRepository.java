package com.codeclan.project.justBook.repositories;

import com.codeclan.project.justBook.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
