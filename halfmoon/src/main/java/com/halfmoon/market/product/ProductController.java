package com.halfmoon.market.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.halfmoon.market.model.ProductDTO;

@Controller
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping("/insProduct")
	public int insProduct(ProductDTO p) {
		return service.insProduct(p);
	}
	
	
}
