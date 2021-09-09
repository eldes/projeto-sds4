package com.eldes.devsuperior.dsvendas.services;

import java.util.List;

import com.eldes.devsuperior.dsvendas.dtos.SaleDto;
import com.eldes.devsuperior.dsvendas.dtos.SaleSuccessDto;
import com.eldes.devsuperior.dsvendas.dtos.SaleSumDto;
import com.eldes.devsuperior.dsvendas.entities.Sale;
import com.eldes.devsuperior.dsvendas.repositories.SalesRepository;
import com.eldes.devsuperior.dsvendas.repositories.SellersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SalesService {
	
	@Autowired
	private SalesRepository repository;

	@Autowired
	private SellersRepository sellersRepository;

	@Transactional(readOnly = true)
	public Page<SaleDto> findAll(Pageable pageable) {
		sellersRepository.findAll(); // apenas para trazer para memóia e deixar cache
		Page<Sale> result = repository.findAll(pageable);

		return result.map(entity -> new SaleDto(entity));
	}

	@Transactional(readOnly = true)
	public List<SaleSumDto> amountGroupedBySeller() {
		return repository.amountGroupedBySeller();
	}

	@Transactional(readOnly = true)
	public List<SaleSuccessDto> successGroupedBySeller() {
		return repository.successGroupedBySeller();
	}
}
