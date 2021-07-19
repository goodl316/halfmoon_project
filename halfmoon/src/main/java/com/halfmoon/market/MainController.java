package com.halfmoon.market;

import org.apache.tiles.Attribute;
import org.apache.tiles.AttributeContext;
import org.apache.tiles.preparer.ViewPreparer;
import org.apache.tiles.request.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.halfmoon.market.common.Const;

@Controller
@Component("mainController")
public class MainController implements ViewPreparer  {

	@Autowired
	private MainService service;
	
	@GetMapping("/main/home")
	public void home(Model model) {
		// 인기상품 뿌리기 list
		// 전체상품 뿌리기 list
		model.addAttribute("total_list", service.selTotalList());
	}

	@Override
	public void execute(Request tilesContext, AttributeContext attributeContext) {
		if (Const.menuList == null) {
			System.out.println("------- server start --------");
			Const.menuList = service.selMenuList();
			Const.subMenuList = service.selSubMenuList();
			
		}
		attributeContext.putAttribute("menuList", new Attribute(Const.menuList), true);
		attributeContext.putAttribute("subMenuList", new Attribute(Const.subMenuList), true);
		
	}
	
	
	
}
