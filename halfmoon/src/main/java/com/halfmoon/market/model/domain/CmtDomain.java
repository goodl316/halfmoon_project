package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.CmtEntity;

public class CmtDomain extends CmtEntity {
	
	private String profile_img;
	private String user_nm;
	public String getProfile_img() {
		return profile_img;
	}
	public void setProfile_img(String profile_img) {
		this.profile_img = profile_img;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	
	
}
