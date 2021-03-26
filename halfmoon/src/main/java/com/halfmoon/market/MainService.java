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
	
	List<ProductTypeSubDomain> subSelMenuList() {
		return mapper.subSelMenuList();
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
