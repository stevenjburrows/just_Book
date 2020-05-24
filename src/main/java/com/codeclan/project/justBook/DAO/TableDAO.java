package com.codeclan.project.justBook.DAO;

import com.codeclan.project.justBook.Entity.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class TableDAO {

    @Autowired
    private TableRepository tableRepository;

    public Collection<Table> getTables() { return tableRepository.findAll(); }

    public Table createTable(Table table) { return tableRepository.insert(table); }
}
