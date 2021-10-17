package com.halfmoon.market.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.model.domain.StoreCmtDomain;
import com.halfmoon.market.model.dto.FollowDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import com.halfmoon.market.model.dto.StoreCmtDTO;
import com.halfmoon.market.model.dto.UserDTO;

@Controller
public class StoreController {
	@Autowired
	private StoreService service;
	
	
	@GetMapping("/store/salePage")
	public void salePage(Model model,ProductSaleDTO p_dto,UserDTO u_dto,FollowDTO f_dto) {
		System.out.println("i_user : "+u_dto.getI_user());
		model.addAttribute("product", service.productUser(p_dto));
		model.addAttribute("user", service.selProductUser(u_dto));
		model.addAttribute("follower", service.selFollower(f_dto));
		model.addAttribute("following", service.selFollowing(f_dto));
		model.addAttribute("p_img", service.productImg(f_dto));
	}
	
	@GetMapping("/store/cmtList")
	@ResponseBody
	public List<StoreCmtDomain> storeCmt(StoreCmtDTO dto){
		List<StoreCmtDomain> list = service.selStoreCmt(dto);
		
		return list;
	}

	@PostMapping("/store/insCmt")
	@ResponseBody
	public Map<String,Object> storeinsCmt(@RequestBody StoreCmtDTO dto){
		System.out.println("i_store : "+dto.getI_store());
		Map<String, Object> val = new HashMap<>();
		val.put(Const.KEY_RESULT, service.insCmt(dto));
		return val;
	}
	
	@PostMapping("/store/delCmt")
	@ResponseBody
	public Map<String, Object> delCmt(@RequestBody StoreCmtDTO dto){
		Map<String, Object> val = new HashMap<>();
		val.put(Const.KEY_RESULT, service.delCmt(dto));
		return val;
	}
	
	@PostMapping("/store/follow")
	@ResponseBody
	public Map<String,Object> follow(@RequestBody FollowDTO dto){
		Map<String, Object> val = new HashMap<String, Object>();
		System.out.println("aaa:"+dto.getIs_follow());
		if(dto.getIs_follow() ==0) {
			val.put(Const.KEY_RESULT, service.delFollow(dto));
		}
		else {
			val.put(Const.KEY_RESULT, service.insFollow(dto));
			
		}
		
		return val;
	}

}
