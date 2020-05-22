package com.codeclan.project.justBook.DAO;

import com.codeclan.project.justBook.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class CustomerDAO {

    @Autowired
    private CustomerRepository customerRepository;

    public Collection<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.insert(customer);
    }
}
