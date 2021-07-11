package com.halfmoon.market.model.domain;

import com.halfmoon.market.model.FavoriteEntity;

public class FavoriteDomain extends FavoriteEntity{
	private int user_count;

	public int getUser_count() {
		return user_count;
	}

	public void setUser_count(int user_count) {
		this.user_count = user_count;
	}
	
	
}
