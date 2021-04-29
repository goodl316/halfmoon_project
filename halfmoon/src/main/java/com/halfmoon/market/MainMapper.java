package com.halfmoon.market;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.ProductTypeDomain;
import com.halfmoon.market.model.domain.ProductTypeSubDomain;

@Mapper
public interface MainMapper {

	List<ProductTypeDomain> selMenuList();
	List<ProductSaleDomain> selTotalList();
	List<ProductTypeSubDomain> subSelMenuList1();
	List<ProductTypeSubDomain> subSelMenuList2();
	List<ProductTypeSubDomain> subSelMenuList3();
	List<ProductTypeSubDomain> subSelMenuList4();
	List<ProductTypeSubDomain> subSelMenuList5();
	List<ProductTypeSubDomain> subSelMenuList6();
	List<ProductTypeSubDomain> subSelMenuList7();
	List<ProductTypeSubDomain> subSelMenuList8();
	List<ProductTypeSubDomain> subSelMenuList9();
	List<ProductTypeSubDomain> subSelMenuList10();
	
	
	
	
	
	
}
