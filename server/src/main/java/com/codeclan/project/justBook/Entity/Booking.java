package com.codeclan.project.justBook.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Booking {

    @Id
    private String id;
    private Customer customer;
    private Table table;
    private String partyName;
    private int partySize;
    private String date;
    private String start;
    private String end;


    public Booking(Customer customer, Table table, String partyName, int partySize, String date, String start, String end) {
        this.customer = customer;
        this.table = table;
        this.partyName = partyName;
        this.partySize = partySize;
        this.date = date;
        this.start = start;
        this.end = end;
    }

    public Booking() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }
}
