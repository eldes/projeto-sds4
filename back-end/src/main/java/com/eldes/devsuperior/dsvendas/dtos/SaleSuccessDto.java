package com.eldes.devsuperior.dsvendas.dtos;

import java.io.Serializable;

import com.eldes.devsuperior.dsvendas.entities.Seller;

public class SaleSuccessDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Long visited;
	private Long deals;


	public SaleSuccessDto() {
	}

	public SaleSuccessDto(Seller seller, Long visited, Long deals) {
		sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}

	public String getSellerName() {
		return this.sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisited() {
		return this.visited;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

	public Long getDeals() {
		return this.deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

	public SaleSuccessDto sellerName(String sellerName) {
		setSellerName(sellerName);
		return this;
	}

	public SaleSuccessDto visited(Long visited) {
		setVisited(visited);
		return this;
	}

	public SaleSuccessDto deals(Long deals) {
		setDeals(deals);
		return this;
	}
}
