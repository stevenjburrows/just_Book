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

        Customer customer1 = new Customer("John Travolta", "none", "none");
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Bradley Cooper", "nuts", "Likes ice in his gin");
        customerRepository.save(customer2);
        Customer customer3 = new Customer("Madonna", "pineapple", "Prefers table in the corner");
        customerRepository.save(customer3);
        Customer customer4 = new Customer("Jason Bourne", "none", "Favorite dish: steak medium rare");
        customerRepository.save(customer4);

        RestaurantTable table1 = new RestaurantTable(1, 4, "Booth");
        tableRepository.save(table1);
        RestaurantTable table2 = new RestaurantTable(2, 2, "Booth");
        tableRepository.save(table2);
        RestaurantTable table3 = new RestaurantTable(3, 1, "Bar height");
        tableRepository.save(table3);
        RestaurantTable table4 = new RestaurantTable(4, 4, "Standalone");
        tableRepository.save(table4);
        RestaurantTable table5 = new RestaurantTable(5, 4, "Standalone");
        tableRepository.save(table5);

        Booking booking1 = new Booking(customer1, table1, "Travolta", 3, "05-06-2020", "14:00", "16:00");
        bookingRepository.save(booking1);
        Booking booking2 = new Booking(customer2, table2, "Cooper", 2, "05-06-2020", "12:00", "13:00");
        bookingRepository.save(booking2);
        Booking booking3 = new Booking(customer4, table5, "Bourne (birthday)", 4, "05-06-2020", "14:00", "16:00");
        bookingRepository.save(booking3);

    }
}
