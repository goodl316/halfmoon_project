package com.halfmoon.market.model.dto;

import com.halfmoon.market.model.MessageEntity;

public class MessageDTO extends MessageEntity {
	
	private String other_nick;
	private String profile_img;
	private String nick;
	private int unread;
	
	public String getOther_nick() {
		return other_nick;
	}
	public void setOther_nick(String other_nick) {
		this.other_nick = other_nick;
	}
	public String getProfile_img() {
		return profile_img;
	}
	public void setProfile_img(String profile_img) {
		this.profile_img = profile_img;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public int getUnread() {
		return unread;
	}
	public void setUnread(int unread) {
		this.unread = unread;
	}
	
	

}
