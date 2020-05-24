package com.codeclan.project.justBook.components;

import com.apple.eawt.Application;
import com.codeclan.project.justBook.DAO.BookingRepository;
import com.codeclan.project.justBook.DAO.CustomerRepository;
import com.codeclan.project.justBook.DAO.TableRepository;
import com.codeclan.project.justBook.Entity.Booking;
import com.codeclan.project.justBook.Entity.Customer;
import com.codeclan.project.justBook.Entity.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@Component
public class DataLoader implements ApplicationRunner {

    SimpleDateFormat sdf = new SimpleDateFormat("HH:mm dd/MM/yyyy");

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

        Table table1 = new Table(1, 4, "Booth");
        tableRepository.save(table1);

        Booking booking1 = new Booking(customer1, table1, "Party!", 3, "14:00 12-06-2020", "16:00 12-06-2020");
        bookingRepository.save(booking1);
        customer1.addBooking(booking1.getId());
        customerRepository.save(customer1);
    }
}
