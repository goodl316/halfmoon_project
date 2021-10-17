package com.halfmoon.market.store;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.domain.FollowDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.StoreCmtDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.FollowDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import com.halfmoon.market.model.dto.StoreCmtDTO;
import com.halfmoon.market.model.dto.UserDTO;

@Mapper
public interface StoreMapper {
	
	List<ProductSaleDomain> productUser(ProductSaleDTO dto);
	UserDomain selProductUser(UserDTO dto);

	List<StoreCmtDomain> selStoreCmt(StoreCmtDTO dto);
	List<FollowDomain> selFollower(FollowDTO dto);
	List<FollowDomain> selFollowing(FollowDTO dto);
	List<FollowDomain> productImg(FollowDTO dto);
	int insCmt(StoreCmtDTO dto);
	int delCmt(StoreCmtDTO dto);
	int insFollow(FollowDTO dto);
	int delFollow(FollowDTO dto);
}
