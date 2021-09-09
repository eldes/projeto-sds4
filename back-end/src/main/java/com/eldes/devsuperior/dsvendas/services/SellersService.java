package com.eldes.devsuperior.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.eldes.devsuperior.dsvendas.dtos.SellerDto;
import com.eldes.devsuperior.dsvendas.entities.Seller;
import com.eldes.devsuperior.dsvendas.repositories.SellersRepository;

@Service
public class SellersService {

	@Autowired
	private SellersRepository repository;

	public List<SellerDto> findAll() {
		List<Seller> result = repository.findAll();
		
		return result.stream().map(entity -> new SellerDto(entity)).collect(Collectors.toList());
	}
}
