package com.codeclan.project.justBook.controllers;

import com.codeclan.project.justBook.repositories.BookingRepository;
import com.codeclan.project.justBook.models.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping
    public ResponseEntity<List<Booking>> getBookings(
            @RequestParam(name = "name", required = false) String name
//            @RequestParam(name = "date", required = false) String date
    ) {
//        if (date != null) {
//            return new ResponseEntity<List<Booking>>(bookingRepository.findByDate(date), HttpStatus.OK);
//        }

        if(name != null) {
            return new ResponseEntity<List<Booking>>(bookingRepository.findByCustomerName(name), HttpStatus.OK);
        }

        return new ResponseEntity<List<Booking>> (bookingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getBooking(@PathVariable Long id) {
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Booking> putBooking(@RequestBody Booking booking, @PathVariable Long id){
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<List<Booking>> deleteBooking(@PathVariable Long id){
        bookingRepository.deleteById(id);
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.OK);
    }
}
