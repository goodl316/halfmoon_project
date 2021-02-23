package com.halfmoon.market.user;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	int insUser(UserDTO p);
	int updUser(UserDTO p);
	int updAuth(UserDTO dto);
	UserDomain selUser(UserDTO dto);
	
	//-----------내정보 수정-----------------
	int updProfile(UserDTO p);
	int delProdile(UserDTO p);
	int updUserPw(UserDTO p);
	int updUserAddress(UserDTO p);

}
