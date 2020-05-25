package com.codeclan.project.justBook.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class Customer {

    @Id
    private String id;
    private List<String> bookings;
    private String name;
    private String allergies;
    private String notes;
    private Integer visits;

    public Customer(String name, String allergies, String notes) {
        this.id = new ObjectId().toString();
        this.name = name;
        this.allergies = allergies;
        this.notes = notes;
        this.bookings = new ArrayList<>();
        this.visits = 0;
    }

    public Customer() {
    }

    public Customer(String id, String name, String allergies, String notes) {
        this.id = id;
        this.name = name;
        this.allergies = allergies;
        this.notes = notes;
        this.bookings = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getBookings() {
        return bookings;
    }

    public void setBookings(List<String> bookings) {
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

    public void addBooking(String booking){
        bookings.add(booking);
    }
}
