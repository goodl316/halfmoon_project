package com.halfmoon.market.user;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.UserEntity;

@Mapper
public interface UserMpper {
	
	UserEntity selUser(UserEntity p);
	int insUser(UserEntity p);
	int updUser(UserEntity p);
	int deluSER(UserEntity p);
	

}
