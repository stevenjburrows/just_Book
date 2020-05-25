package com.codeclan.project.justBook.repositories;

import com.codeclan.project.justBook.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<RestaurantTable, Long> {
}
