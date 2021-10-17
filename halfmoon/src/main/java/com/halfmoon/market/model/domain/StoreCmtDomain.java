package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.StoreCmtEntity;

public class StoreCmtDomain extends StoreCmtEntity{
	
	private String show_time;
	private String user_nm;
	
	public String getShow_time() {
		return show_time;
	}

	public void setShow_time(String show_time) {
		this.show_time = show_time;
	}

	public String getUser_nm() {
		return user_nm;
	}

	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	
	
	

}
