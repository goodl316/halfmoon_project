package com.halfmoon.market.product;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.ProductDTO;
import com.halfmoon.market.model.ProductEntity;

@Mapper
public interface ProductMapper {
	
	List<ProductEntity> selProductList(ProductDTO p);
	ProductEntity selProduct(ProductDTO p);
	int insProduct(ProductDTO p);
	int updProduct(ProductDTO p);
	int delProduct(ProductDTO p);
	
	//댓글, 좋아요, 조회수 구현 해야됨
	

}
