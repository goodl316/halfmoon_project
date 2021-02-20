package com.halfmoon.market.user;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	UserEntity selUser(UserDTO p);
	int insUser(UserDTO p);
	int updUser(UserEntity p);
	int deluSER(UserEntity p);
	

}
