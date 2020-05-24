package com.codeclan.project.justBook.Controller;

import com.codeclan.project.justBook.DAO.CustomerRepository;
import com.codeclan.project.justBook.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/customers")
public class CustomerController {


    @Autowired
    CustomerRepository customerRepository;

    @GetMapping
    public Collection<Customer> getCustomers() {
        return customerRepository.findAll();
    }

//    @PostMapping
//    public Customer postCustomer(@RequestBody Customer customer){
//        return customerService.createCustomer(customer);
//    }
    @PostMapping
    public ResponseEntity<Customer> postBooking(@RequestBody Customer customer) {
        customerRepository.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED); }


}
