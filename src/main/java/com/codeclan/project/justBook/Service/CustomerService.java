package com.codeclan.project.justBook.Service;

import com.codeclan.project.justBook.DAO.CustomerDAO;
import com.codeclan.project.justBook.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CustomerService {

    @Autowired
    private CustomerDAO customerDAO;

    public Collection<Customer> getCustomers() {
        return customerDAO.getCustomers();
    }

    public Customer createCustomer(Customer customer) {
        return customerDAO.createCustomer(customer);
    }
}
