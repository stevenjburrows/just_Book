package com.codeclan.project.justBook.components;

import com.codeclan.project.justBook.models.RestaurantTable;
import com.codeclan.project.justBook.repositories.BookingRepository;
import com.codeclan.project.justBook.repositories.CustomerRepository;
import com.codeclan.project.justBook.repositories.TableRepository;
import com.codeclan.project.justBook.models.Booking;
import com.codeclan.project.justBook.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@Component
public class DataLoader implements ApplicationRunner {

//    SimpleDateFormat sdf = new SimpleDateFormat("HH:mm dd/MM/yyyy");

    @Autowired
    private TableRepository tableRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private BookingRepository bookingRepository;

    public void run(ApplicationArguments args) throws ParseException {
        tableRepository.deleteAll();
        customerRepository.deleteAll();
        bookingRepository.deleteAll();

        Customer customer1 = new Customer("Daniel", "none", "none");
        customerRepository.save(customer1);

        RestaurantTable table1 = new RestaurantTable(1, 4, "Booth");
        tableRepository.save(table1);

        Booking booking1 = new Booking(customer1, table1, "Party!", 3, "12-06-2020", "14:00", "16:00");
        bookingRepository.save(booking1);
    }
}
