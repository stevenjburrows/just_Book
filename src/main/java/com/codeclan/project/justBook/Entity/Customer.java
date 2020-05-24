package com.codeclan.project.justBook.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document
public class Customer {

    @Id
    private String id;
    private ArrayList<String> bookings;
    private String name;
    private String allergies;
    private String notes;
    private Integer visits;

    public Customer(String name, String allergies, String notes) {
//        this.id = new ObjectId().toString();
        this.name = name;
        this.allergies = allergies;
        this.notes = notes;
        this.visits = 0;
        this.bookings = new ArrayList<>();
    }

    public Customer() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ArrayList<String> getBookings() {
        return bookings;
    }

    public void setBookings(ArrayList<String> bookings) {
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

    public void addBooking(String bookingId){
        bookings.add(bookingId);
    }
}
