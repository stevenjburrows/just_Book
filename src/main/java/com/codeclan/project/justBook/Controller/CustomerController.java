package com.codeclan.project.justBook.Controller;


import com.codeclan.project.justBook.Entity.Customer;
import com.codeclan.project.justBook.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public Collection<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @PostMapping
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }

}
