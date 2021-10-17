package com.halfmoon.market.model.dto;

import com.halfmoon.market.model.UserEntity;

public class UserDTO extends UserEntity{
	private String clk_pw;
	private int state;
	private int loginUser;
	private int toggle;
	private String target_User;
	public String getClk_pw() {
		return clk_pw;
	}

	public void setClk_pw(String clk_pw) {
		this.clk_pw = clk_pw;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public int getLoginUser() {
		return loginUser;
	}

	public void setLoginUser(int loginUser) {
		this.loginUser = loginUser;
	}

	public int getToggle() {
		return toggle;
	}

	public void setToggle(int toggle) {
		this.toggle = toggle;
	}

	public String getTarget_User() {
		return target_User;
	}

	public void setTarget_User(String target_User) {
		this.target_User = target_User;
	}
	
	
}
