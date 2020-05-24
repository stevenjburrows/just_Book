package com.codeclan.project.justBook.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;

@Document
public class Booking {

    @Id
    private String id;
    @JsonBackReference
    private Customer customer;
    @JsonBackReference
    private Table table;
    private String partyName;
    private int partySize;
    private SimpleDateFormat startDate;
    private SimpleDateFormat endDate;

    public Booking(Customer customer, Table table, String partyName, int partySize, SimpleDateFormat startDate, SimpleDateFormat endDate) {
//        this.id = new ObjectId().toString();
        this.customer = customer;
        this.table = table;
        this.partyName = partyName;
        this.partySize = partySize;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Booking() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }

    public String getPartyName() {
        return partyName;
    }

    public void setPartyName(String partyName) {
        this.partyName = partyName;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }

    public SimpleDateFormat getStartDate() {
        return startDate;
    }

    public void setStartDate(SimpleDateFormat startDate) {
        this.startDate = startDate;
    }

    public SimpleDateFormat getEndDate() {
        return endDate;
    }

    public void setEndDate(SimpleDateFormat endDate) {
        this.endDate = endDate;
    }
}
