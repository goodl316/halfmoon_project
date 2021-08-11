package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.UserEntity;

public class UserDomain extends UserEntity{
    private int p_total;
    private String show_time;
    
    public int getP_total() {
        return p_total;
    }
    public void setP_total(int p_total) {
        this.p_total = p_total;
    }
	public String getShow_time() {
		return show_time;
	}
	public void setShow_time(String show_time) {
		this.show_time = show_time;
	}
    
    
}
