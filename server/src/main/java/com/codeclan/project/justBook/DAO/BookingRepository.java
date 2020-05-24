package com.codeclan.project.justBook.DAO;

import com.codeclan.project.justBook.Entity.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByCustomerName(String name);
}
