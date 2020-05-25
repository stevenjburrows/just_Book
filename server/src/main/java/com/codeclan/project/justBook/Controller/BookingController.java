package com.codeclan.project.justBook.Controller;

import com.codeclan.project.justBook.DAO.BookingRepository;
import com.codeclan.project.justBook.DAO.CustomerRepository;
import com.codeclan.project.justBook.Entity.Booking;
import com.codeclan.project.justBook.Entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;



    @GetMapping
    public ResponseEntity<List<Booking>> getBookings(
            @RequestParam(name = "name", required = false) String name,
            @RequestParam(name = "date", required = false) String date

    ) {

        if (date != null) {
            return new ResponseEntity<List<Booking>>(bookingRepository.findByDate(date), HttpStatus.OK);

        }

        if(name != null) {
            return new ResponseEntity<List<Booking>>(bookingRepository.findByCustomerName(name), HttpStatus.OK);
        }



        return new ResponseEntity<List<Booking>> (bookingRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        Customer customer1 = new Customer(booking.getCustomer().getId(), booking.getCustomer().getName(), booking.getCustomer().getAllergies(), booking.getCustomer().getNotes());
        customer1.addBooking(booking.getId());
        customerRepository.save(customer1);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity getBooking(@PathVariable String id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Booking> putBooking(@RequestBody Booking booking, @PathVariable String id){
//        if ( !id.equals(booking.getId())){
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<List<Booking>> deleteBooking(@PathVariable String id){
        bookingRepository.deleteById(id);
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }
}
