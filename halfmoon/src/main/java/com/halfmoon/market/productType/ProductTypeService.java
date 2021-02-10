package com.halfmoon.market.productType;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.model.ProductTypeEntity;

@Service
public class ProductTypeService {
	
	@Autowired
	ProductTypeMapper mapper;
	
	public List<ProductTypeEntity> selManageBoardList(){
		return mapper.selManageBoardList();
	};
}
