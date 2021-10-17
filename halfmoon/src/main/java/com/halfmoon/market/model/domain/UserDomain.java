package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.UserEntity;

public class UserDomain extends UserEntity{
    private int p_total;
    private String show_time;
    private int i_store;
    private String store_dt;
    private int sold_out;
    private int product_count;
    private int loginUser;
    private int is_follow;
    private int count_follow;
    private int count_cmt;
    private int count_following;
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
	public int getI_store() {
		return i_store;
	}
	public void setI_store(int i_store) {
		this.i_store = i_store;
	}
	public String getStore_dt() {
		return store_dt;
	}
	public void setStore_dt(String store_dt) {
		this.store_dt = store_dt;
	}
	public int getSold_out() {
		return sold_out;
	}
	public void setSold_out(int sold_out) {
		this.sold_out = sold_out;
	}
	public int getProduct_count() {
		return product_count;
	}
	public void setProduct_count(int product_count) {
		this.product_count = product_count;
	}
	public int getLoginUser() {
		return loginUser;
	}
	public void setLoginUser(int loginUser) {
		this.loginUser = loginUser;
	}
	public int getIs_follow() {
		return is_follow;
	}
	public void setIs_follow(int is_follow) {
		this.is_follow = is_follow;
	}
	public int getCount_follow() {
		return count_follow;
	}
	public void setCount_follow(int count_follow) {
		this.count_follow = count_follow;
	}
	public int getCount_cmt() {
		return count_cmt;
	}
	public void setCount_cmt(int count_cmt) {
		this.count_cmt = count_cmt;
	}
	public int getCount_following() {
		return count_following;
	}
	public void setCount_following(int count_following) {
		this.count_following = count_following;
	}
	
	
    
    
}
