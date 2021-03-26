package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.ProductSaleEntity;

public class ProductSaleDomain extends ProductSaleEntity{
    private String show_price;
    private String show_loc;
    private String show_time;
    private String user_nm;
    private int is_favorite;
    
    public String getShow_time() {
        return show_time;
    }
    public void setShow_time(String show_time) {
        this.show_time = show_time;
    }
    public String getShow_price() {
        return show_price;
    }
    public void setShow_price(String show_price) {
        this.show_price = show_price;
    }
    public String getShow_loc() {
        return show_loc;
    }
    public void setShow_loc(String show_loc) {
        this.show_loc = show_loc;
    }
	public int getIs_favorite() {
		return is_favorite;
	}
	public void setIs_favorite(int is_favorite) {
		this.is_favorite = is_favorite;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
    
    
}
