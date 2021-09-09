package com.eldes.devsuperior.dsvendas.controllers;

import java.util.List;

import com.eldes.devsuperior.dsvendas.dtos.SellerDto;
import com.eldes.devsuperior.dsvendas.services.SellersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sellers")
public class SellersController {

	@Autowired
	private SellersService service;

	@GetMapping
	public ResponseEntity<List<SellerDto>> findAll() {
		List<SellerDto> list = service.findAll();
		
		return ResponseEntity.ok(list);
	}
}
