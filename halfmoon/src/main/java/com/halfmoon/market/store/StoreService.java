package com.halfmoon.market.store;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.common.Utils;
import com.halfmoon.market.model.domain.FollowDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.StoreCmtCmtDomain;
import com.halfmoon.market.model.domain.StoreCmtDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.FollowDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import com.halfmoon.market.model.dto.StoreCmtCmtDTO;
import com.halfmoon.market.model.dto.StoreCmtDTO;
import com.halfmoon.market.model.dto.UserDTO;

@Service
public class StoreService {
	
	@Autowired
	private StoreMapper mapper;
	@Autowired
	private HttpSession hs;
	
	List<ProductSaleDomain> productUser(ProductSaleDTO dto) {
		List<ProductSaleDomain> list= mapper.productUser(dto);
		for(int i=0; i<list.size(); i++) {
    		list.get(i).setShow_title(Const.titleArr[list.get(i).getI_product_type()-1]);
    		list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc() -1]);
    	}
		return list;
	}
	
	
	UserDomain selProductUser(UserDTO dto) {
		dto.setLoginUser(SecurityUtils.getUserPk(hs));
		UserDomain vo = mapper.selProductUser(dto);
		vo.setLoginUser(SecurityUtils.getUserPk(hs));
		vo.setShow_time(Utils.timeFormatter(vo.getShow_time()));
		System.out.println(vo.getLoginUser());
		System.out.println(dto.getLoginUser());
		
		return vo;
	}
	
	
	List<StoreCmtDomain> selStoreCmt(StoreCmtDTO dto){
		List<StoreCmtDomain> list = mapper.selStoreCmt(dto);
		for(int i=0; i<list.size(); i++) {
			list.get(i).setShow_time(Utils.timeFormatter(list.get(i).getShow_time()));
		}
		
		return list;
	}
	List<StoreCmtCmtDomain> selStoreCmtCmt(StoreCmtCmtDTO dto){
		return mapper.selStoreCmtCmt(dto);
	}
	
	List<FollowDomain> selFollower(FollowDTO dto){
		return mapper.selFollower(dto);
	}
	List<FollowDomain> selFollowing(FollowDTO dto){
		return mapper.selFollowing(dto);
	}
	List<FollowDomain> productImg(FollowDTO dto){
		List<FollowDomain> list = mapper.productImg(dto);
		
		return list;
	}
	
	List<FollowDomain> selFollowList(FollowDTO dto){
		return mapper.selFollowList(dto);
	}
	
	List<FollowDomain> selp_img(FollowDTO dto){
		return mapper.selp_img(dto);
	}
	
	int insCmt(StoreCmtDTO dto) {
		System.out.println("댓글 등록 확인");
		int result=mapper.insCmt(dto);
		return result;
	}
	
	int delCmt(StoreCmtDTO dto) {
		int result = mapper.delCmt(dto);
		return result;
	}
	
	int insFollow(FollowDTO dto) {
		int result = mapper.insFollow(dto);
		
		return result;
	}
	int delFollow(FollowDTO dto) {
		int result = mapper.delFollow(dto);
		return result;
	}
	int insCmtCmt(StoreCmtCmtDTO dto) {
		return mapper.insCmtCmt(dto);
	}
	
	int delCmtCmt(StoreCmtCmtDTO dto) {
		return mapper.delCmtCmt(dto);
	}
	
}
