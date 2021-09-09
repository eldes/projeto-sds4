package com.eldes.devsuperior.dsvendas.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import com.eldes.devsuperior.dsvendas.entities.Sale;

public class SaleDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Integer visited;
	private Integer deals;
	private Integer amount;
	private LocalDate date;

	private SellerDto seller;


	public SaleDto() {}


	public SaleDto(Long id, Integer visited, Integer deals, Integer amount, LocalDate date, SellerDto seller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
		this.seller = seller;
	}

	public SaleDto(Sale entity) {
		id = entity.getId();
		visited = entity.getVisited();
		deals = entity.getDeals();
		amount = entity.getAmount();
		date = entity.getDate();
		seller = new SellerDto(entity.getSeller());
	}


	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVisited() {
		return this.visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return this.deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public Integer getAmount() {
		return this.amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return this.date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}


	public SellerDto getSeller() {
		return this.seller;
	}

	public void setSeller(SellerDto seller) {
		this.seller = seller;
	}

}
