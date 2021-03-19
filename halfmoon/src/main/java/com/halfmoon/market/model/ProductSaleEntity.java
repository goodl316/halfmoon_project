package com.halfmoon.market.model;

public class ProductSaleEntity {
	
	private int i_product;
	private int i_user;
	private String p_nm;
	private int p_price;

	private int i_product_type;
	private String type_sub_title;
	private String p_img_main;
	private String title;
	private String ctnt;
	private int i_loc;
	private String p_addr;
	private int state;
	private String tag;
	private String r_dt;
	private String m_dt;
	private int hit;
	private int p_favorite;

	// check getter and setter
	public int getI_product() {
		return i_product;
	}
	public void setI_product(int i_product) {
		this.i_product = i_product;
	}
	public String getP_nm() {
		return p_nm;
	}
	public void setP_nm(String p_nm) {
		this.p_nm = p_nm;
	}
	public int getP_price() {
		return p_price;
	}
	public void setP_price(int p_price) {
		this.p_price = p_price;
	}
	public int getI_product_type() {
		return i_product_type;
	}
	public void setI_product_type(int i_product_type) {
		this.i_product_type = i_product_type;
	}
	public String getType_sub_title() {
		return type_sub_title;
	}
	public void setType_sub_title(String type_sub_title) {
		this.type_sub_title = type_sub_title;
	}
	public String getP_img_main() {
		return p_img_main;
	}
	public void setP_img_main(String p_img_main) {
		this.p_img_main = p_img_main;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCtnt() {
		return ctnt;
	}
	public void setCtnt(String ctnt) {
		this.ctnt = ctnt;
	}
	public int getI_loc() {
		return i_loc;
	}
	public void setI_loc(int i_loc) {
		this.i_loc = i_loc;
	}
	public String getP_addr() {
		return p_addr;
	}
	public void setP_addr(String p_addr) {
		this.p_addr = p_addr;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public String getR_dt() {
		return r_dt;
	}
	public void setR_dt(String r_dt) {
		this.r_dt = r_dt;
	}
	public String getM_dt() {
		return m_dt;
	}
	public void setM_dt(String m_dt) {
		this.m_dt = m_dt;
	}
	public int getHit() {
		return hit;
	}
	public void setHit(int hit) {
		this.hit = hit;
	}
	public int getI_user() {
		return i_user;
	}
	public void setI_user(int i_user) {
		this.i_user = i_user;
	}
	
	public int getP_favorite() {
		return p_favorite;
	}
	
	public void setP_favorite(int p_favorite) {
		this.p_favorite = p_favorite;
	}
}
