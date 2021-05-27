package com.halfmoon.market.model.dto;

import com.halfmoon.market.model.ProductSaleEntity;

public class ProductSaleDTO extends ProductSaleEntity {
	
	private int toggle;
	private int sortState;
	
	public int getToggle() {
		return toggle;
	}

	public void setToggle(int toggle) {
		this.toggle = toggle;
	}
	
	public int getSortState() {
		return sortState;
	}

	public void setSortState(int sortState) {
		this.sortState = sortState;
	}


}
