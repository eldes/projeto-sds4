package com.eldes.devsuperior.dsvendas.repositories;

import java.util.List;

import com.eldes.devsuperior.dsvendas.dtos.SaleSuccessDto;
import com.eldes.devsuperior.dsvendas.dtos.SaleSumDto;
import com.eldes.devsuperior.dsvendas.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SalesRepository  extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.eldes.devsuperior.dsvendas.dtos.SaleSumDto(sale.seller, SUM(sale.amount)) FROM Sale AS sale GROUP BY sale.seller")
	List<SaleSumDto> amountGroupedBySeller();

	@Query("SELECT new com.eldes.devsuperior.dsvendas.dtos.SaleSuccessDto(sale.seller, SUM(sale.visited), SUM(sale.deals)) FROM Sale AS sale GROUP BY sale.seller")
	List<SaleSuccessDto> successGroupedBySeller();
}
