package com.codeclan.project.justBook.Controller;

import com.codeclan.project.justBook.DAO.BookingRepository;
import com.codeclan.project.justBook.Entity.Booking;
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

    @GetMapping (value = "/name/{name}")
    public ResponseEntity<List<Booking>> getByCustomerName(@PathVariable String name) {
        return new ResponseEntity<List<Booking>>(bookingRepository.findByCustomerName(name), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getBooking(@PathVariable String id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping
    public Collection<Booking> getBookings() { return bookingRepository.findAll(); }

    @PostMapping
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED); }
//    public Booking postBooking(@RequestBody Booking booking) { return bookingService.createBooking(booking); }

    @PutMapping(value = "/pirates/{id}")
    public ResponseEntity<Booking> putBooking(@RequestBody Booking booking, @PathVariable String id){
        if (booking.getId() != id){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // response entity with no body
        }
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}
