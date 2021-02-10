package com.halfmoon.market.productType;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.ProductTypeEntity;

@Mapper
public interface ProductTypeMapper {
	List<ProductTypeEntity> selManageBoardList();
}
