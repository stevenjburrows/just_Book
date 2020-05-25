package com.codeclan.project.justBook.controllers;

import com.codeclan.project.justBook.models.RestaurantTable;
import com.codeclan.project.justBook.repositories.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/tables")
public class TableController {

    @Autowired
    private TableRepository tableRepository;

    @GetMapping
    public ResponseEntity<List<RestaurantTable>> getAllTables() {
        List<RestaurantTable> foundTables = tableRepository.findAll();
        return new ResponseEntity<List<RestaurantTable>>(foundTables, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getTable(@PathVariable Long id){
        return new ResponseEntity<>(tableRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RestaurantTable> postBooking(@RequestBody RestaurantTable table) {
        tableRepository.save(table);
        return new ResponseEntity<>(table, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<RestaurantTable> putTable(@RequestBody RestaurantTable table, @PathVariable Long id){
        tableRepository.save(table);
        return new ResponseEntity<>(table, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<List<RestaurantTable>> deleteTable(@PathVariable Long id){
        tableRepository.deleteById(id);
        return new ResponseEntity<>(tableRepository.findAll(), HttpStatus.OK);
    }

}
