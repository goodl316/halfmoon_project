package com.halfmoon.market.user;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.UserDTO;
import com.halfmoon.market.model.UserEntity;

@Mapper
public interface UserMapper {
	
	UserEntity selUser(UserDTO p);
	int insUser(UserEntity p);
	int updUser(UserEntity p);
	int deluSER(UserEntity p);
	

}
