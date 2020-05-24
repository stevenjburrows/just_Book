package com.codeclan.project.justBook.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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
    private String start;
    private String end;
    private Date startDate;
    private Date endDate;


    public Booking(Customer customer, Table table, String partyName, int partySize, String start, String end) throws ParseException {
        this.id = new ObjectId().toString();
        this.customer = customer;
        this.table = table;
        this.partyName = partyName;
        this.partySize = partySize;
        this.start = start;
        this.end = end;
//        this.startDate = new SimpleDateFormat("HH:mm dd-MM-yyyy").parse(start);
//        this.endDate = new SimpleDateFormat("HH:mm dd-MM-yyyy").parse(end);
    }

    public Booking() {
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
