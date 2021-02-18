package com.halfmoon.market.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.model.ProductDTO;
import com.halfmoon.market.model.ProductEntity;

@Service
public class ProductService {

	@Autowired
	private ProductMapper mapper;
	//상품 목록
	public List<ProductEntity> selProductList(ProductDTO p){
		return mapper.selProductList(p);
	}
	//상품 디테일
	public ProductEntity selProduct(ProductDTO p) {
		return mapper.selProduct(p);
	}
	//상품 등록
	public int insProduct(ProductDTO p) {
		return mapper.insProduct(p);
	}
	//상품 수정
	public int updProduct(ProductDTO p) {
		return mapper.updProduct(p);
	}
	//상품 삭제
	public int delProduct(ProductDTO p) {
		return mapper.delProduct(p);
	}
	
	
}
