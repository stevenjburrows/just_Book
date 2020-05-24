package com.codeclan.project.justBook.Controller;

import com.codeclan.project.justBook.DAO.TableRepository;
import com.codeclan.project.justBook.Entity.Table;
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
    public Collection<Table> getTables() {
        return tableRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Table> postBooking(@RequestBody Table table) {
        tableRepository.save(table);
        return new ResponseEntity<>(table, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Table> putTable(@RequestBody Table table, @PathVariable String id){
//        if ( !id.equals(customer.getId())){
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
        tableRepository.save(table);
        return new ResponseEntity<>(table, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<List<Table>> deleteTable(@PathVariable String id){
        tableRepository.deleteById(id);
        return new ResponseEntity<>(tableRepository.findAll(), HttpStatus.OK);
    }

}
