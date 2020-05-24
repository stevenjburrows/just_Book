package com.codeclan.project.justBook.DAO;

import com.codeclan.project.justBook.Entity.Table;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TableRepository extends MongoRepository <Table, String> {
}
