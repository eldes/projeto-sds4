package com.eldes.devsuperior.dsvendas.dtos;

import java.io.Serializable;

import com.eldes.devsuperior.dsvendas.entities.Seller;

public class SaleSumDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Double sum;


	public SaleSumDto() {}


	public SaleSumDto(Seller seller, Double sum) {
		sellerName = seller.getName();
		this.sum = sum;
	}


	public String getSellerName() {
		return this.sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return this.sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}

}
