package com.codeclan.project.justBook.Service;

import com.codeclan.project.justBook.DAO.TableDAO;
import com.codeclan.project.justBook.Entity.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TableService {

    @Autowired
    private TableDAO tableDAO;

    public Collection<Table> getTables() { return tableDAO.getTables(); }

    public Table createTable(Table table) { return tableDAO.createTable(table); }
}
