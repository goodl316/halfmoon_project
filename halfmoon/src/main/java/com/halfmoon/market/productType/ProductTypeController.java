package com.halfmoon.market.productType;

import org.apache.tiles.Attribute;
import org.apache.tiles.AttributeContext;
import org.apache.tiles.preparer.ViewPreparer;
import org.apache.tiles.request.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.halfmoon.market.common.Const;

@Controller
public class ProductTypeController implements ViewPreparer {
	
	@Autowired
	ProductTypeService service;

	@Override
	public void execute(Request tilesContext, AttributeContext attributeContext) {
		if(Const.menuList == null) {
			System.out.println(" ----- get menus from DB -----");	
			Const.menuList = service.selCategoryList();
		}
        attributeContext.putAttribute("menuList", new Attribute(Const.menuList), true);		
	}
		
}


