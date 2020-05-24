package com.codeclan.project.justBook.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Table {

    @Id
    private String id;
    private Integer number;
    private Integer numberOfSeats;
    private String type;
    private boolean isBooked;

    public Table(Integer number, Integer numberOfSeats, String type) {
//        this.id = new ObjectId().toString();
        this.number = number;
        this.numberOfSeats = numberOfSeats;
        this.type = type;
        this.isBooked = false;
    }

    public Table() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

