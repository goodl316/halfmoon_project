package com.halfmoon.market;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.Utils;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.ProductTypeDomain;
import com.halfmoon.market.model.domain.ProductTypeSubDomain;

@Service
public class MainService {
	
	@Autowired
	private MainMapper mapper;
	
	List<ProductTypeDomain> selMenuList() {
		return mapper.selMenuList();
	}
	
	List<ProductTypeSubDomain> subSelMenuList1() {
		return mapper.subSelMenuList1();
	}
	List<ProductTypeSubDomain> subSelMenuList2() {
		return mapper.subSelMenuList2();
	}
	List<ProductTypeSubDomain> subSelMenuList3() {
		return mapper.subSelMenuList3();
	}
	List<ProductTypeSubDomain> subSelMenuList4() {
		return mapper.subSelMenuList4();
	}
	List<ProductTypeSubDomain> subSelMenuList5() {
		return mapper.subSelMenuList5();
	}
	List<ProductTypeSubDomain> subSelMenuList6() {
		return mapper.subSelMenuList6();
	}
	List<ProductTypeSubDomain> subSelMenuList7() {
		return mapper.subSelMenuList7();
	}
	List<ProductTypeSubDomain> subSelMenuList8() {
		return mapper.subSelMenuList8();
	}
	List<ProductTypeSubDomain> subSelMenuList9() {
		return mapper.subSelMenuList9();
	}
	List<ProductTypeSubDomain> subSelMenuList10() {
		return mapper.subSelMenuList10();
	}
	
	
	List<ProductSaleDomain> selTotalList() {

		List<ProductSaleDomain> list = mapper.selTotalList();
		for (int i = 0; i < list.size(); i++) {
			// 지역이름 셋팅
			list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc() - 1]);
			//System.out.println(list.get(i).getShow_loc());
			// 가격셋팅
			// 나중에 로직 처리 : 100000원 넘어갈 경우, 10만원 등으로 변경.

			// 시간셋팅
			list.get(i).setShow_time(Utils.timeFormatter(list.get(i).getShow_time()));
		}
		return list;
	}


	
	
	
	
	
}
