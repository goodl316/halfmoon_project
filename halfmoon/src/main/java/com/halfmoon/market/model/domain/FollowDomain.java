package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.FollowEntity;

public class FollowDomain extends FollowEntity{
	private String user_nm;
	private String profile_img;
	private String p_img_main;
	
	private int saleCount;
	private int countFollow;
	private int i_product;
	
	public FollowDomain() {
		
	}
	
	public FollowDomain(String b, int a) {
		this.p_img_main = b;
		super.setI_user(a);
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public String getProfile_img() {
		return profile_img;
	}
	public void setProfile_img(String profile_img) {
		this.profile_img = profile_img;
	}
	public int getSaleCount() {
		return saleCount;
	}
	public void setSaleCount(int saleCount) {
		this.saleCount = saleCount;
	}
	public int getCountFollow() {
		return countFollow;
	}
	public void setCountFollow(int countFollow) {
		this.countFollow = countFollow;
	}
	public String getP_img_main() {
		return p_img_main;
	}
	public void setP_img_main(String p_img_main) {
		this.p_img_main = p_img_main;
	}
	public int getI_product() {
		return i_product;
	}
	public void setI_product(int i_product) {
		this.i_product = i_product;
	}
	
	
	
}
