package com.codeclan.project.justBook.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String allergies;
    @Column
    private String notes;
    @Column
    private Integer visits;
    @JsonBackReference
    @OneToMany(mappedBy="customer", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Customer(String name, String allergies, String notes) {
        this.name = name;
        this.allergies = allergies;
        this.notes = notes;
        this.bookings = new ArrayList<>();
        this.visits = 0;
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Integer getVisits() {
        return visits;
    }

    public void setVisits(Integer visits) {
        this.visits = visits;
    }

    public void addBooking(Booking booking){
        bookings.add(booking);
    }
}
