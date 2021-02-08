package com.halfmoon.market.productType;

import org.apache.tiles.AttributeContext;
import org.apache.tiles.preparer.ViewPreparer;
import org.apache.tiles.request.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ProductTypeController implements ViewPreparer {
	
	@Autowired
	ProductTypeService service;

	@Override
	public void execute(Request tilesContext, AttributeContext attributeContext) {
		// TODO Auto-generated method stub
		
	}

}
