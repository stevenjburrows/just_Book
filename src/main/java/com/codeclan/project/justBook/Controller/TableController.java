package com.codeclan.project.justBook.Controller;

import com.codeclan.project.justBook.DAO.TableRepository;
import com.codeclan.project.justBook.Entity.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/tables")
public class TableController {

    @Autowired
    private TableRepository tableRepository;

    @GetMapping
    public Collection<Table> getTables() { return tableRepository.findAll(); }

    @PostMapping
    public ResponseEntity<Table> postBooking(@RequestBody Table table) {
        tableRepository.save(table);
        return new ResponseEntity<>(table, HttpStatus.CREATED); }

}
