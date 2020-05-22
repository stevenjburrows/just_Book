package com.codeclan.project.justBook.DAO;

import com.codeclan.project.justBook.Entity.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}
