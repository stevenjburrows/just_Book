package com.codeclan.project.justBook.repositories;

import com.codeclan.project.justBook.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByCustomerName(String name);
    List<Booking> findByDate(String date);
}
