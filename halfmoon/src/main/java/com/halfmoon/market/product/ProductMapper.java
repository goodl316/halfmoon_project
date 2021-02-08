package com.halfmoon.market.product;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.ProductEntity;

@Mapper
public interface ProductMapper {
	
	List<ProductEntity> selProductList();
	int insProduct(ProductEntity p);
	int updProduct(ProductEntity p);
	int delProduct(ProductEntity p);

}
