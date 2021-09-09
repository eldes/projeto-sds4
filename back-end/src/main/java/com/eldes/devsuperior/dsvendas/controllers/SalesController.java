package com.eldes.devsuperior.dsvendas.controllers;

import java.util.List;

import com.eldes.devsuperior.dsvendas.dtos.SaleDto;
import com.eldes.devsuperior.dsvendas.dtos.SaleSuccessDto;
import com.eldes.devsuperior.dsvendas.dtos.SaleSumDto;
import com.eldes.devsuperior.dsvendas.services.SalesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {

	@Autowired
	private SalesService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDto>> findAll(Pageable pageable) {
		Page<SaleDto> list = service.findAll(pageable);

		return ResponseEntity.ok(list);
	}

	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDto>> amountGroupedBySeller() {
		List<SaleSumDto> list = service.amountGroupedBySeller();

		return ResponseEntity.ok(list);
	}

	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDto>> successGroupedBySeller() {
		List<SaleSuccessDto> list = service.successGroupedBySeller();

		return ResponseEntity.ok(list);
	}

}
