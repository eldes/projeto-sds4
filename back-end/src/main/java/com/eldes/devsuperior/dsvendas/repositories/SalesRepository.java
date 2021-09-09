package com.eldes.devsuperior.dsvendas.repositories;

import com.eldes.devsuperior.dsvendas.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository  extends JpaRepository<Sale, Long> {
}
