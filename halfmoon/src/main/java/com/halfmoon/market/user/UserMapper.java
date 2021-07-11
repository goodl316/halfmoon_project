package com.halfmoon.market.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.UserDTO;

@Mapper
public interface UserMapper {
	// C
	int insUser(UserDTO dto);
	// R
	UserDomain selUser(UserDTO dto);
	UserDomain selUserInfo(UserDTO dto);
	UserDomain findUser(UserDTO dto);
	List<ProductSaleDomain> selMySaleList(UserDTO dto);
	List<ProductSaleDomain> selFavoriteMyList(UserDTO dto);
	// U
	int updAuth(UserDTO dto);
	int updUser(UserDTO p);
	int updAddr(UserDTO p);
	int updCode(UserDTO p);
	
	int updProfileImg(UserDTO p);
	// D
	int delUserImg(UserDTO p);

	


	

}
