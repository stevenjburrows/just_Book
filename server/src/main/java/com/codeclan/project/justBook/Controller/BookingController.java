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



    @GetMapping
    public ResponseEntity<List<Booking>> getBookings(
            @RequestParam(name = "name", required = false) String name
    ) {
        if(name != null) {
            return new ResponseEntity<List<Booking>>(bookingRepository.findByCustomerName(name), HttpStatus.OK);
        }

        return new ResponseEntity<List<Booking>> (bookingRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
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
