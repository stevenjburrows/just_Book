package com.codeclan.project.justBook.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tables")
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Integer number;
    @Column
    private Integer numberOfSeats;
    @Column
    private String type;
    @Column
    private boolean isBooked;
    @JsonBackReference
    @OneToMany(mappedBy="table", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public RestaurantTable(Integer number, Integer numberOfSeats, String type) {
        this.number = number;
        this.numberOfSeats = numberOfSeats;
        this.type = type;
        this.isBooked = false;
        this.bookings = new ArrayList<Booking>();
    }

    public RestaurantTable() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isBooked() {
        return isBooked;
    }

    public void setBooked(boolean booked) {
        isBooked = booked;
    }
}

