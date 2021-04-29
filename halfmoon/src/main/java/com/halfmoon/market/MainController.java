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
			Const.subMenuList1 = service.subSelMenuList1();
			Const.subMenuList2 = service.subSelMenuList2();
			Const.subMenuList3 = service.subSelMenuList3();
			Const.subMenuList4 = service.subSelMenuList4();
			Const.subMenuList5 = service.subSelMenuList5();
			Const.subMenuList6 = service.subSelMenuList6();
			Const.subMenuList7 = service.subSelMenuList7();
			Const.subMenuList8 = service.subSelMenuList8();
			Const.subMenuList9 = service.subSelMenuList9();
			Const.subMenuList10 = service.subSelMenuList10();
		}
		attributeContext.putAttribute("menuList", new Attribute(Const.menuList), true);
		attributeContext.putAttribute("subMenuList1", new Attribute(Const.subMenuList1), true);
		attributeContext.putAttribute("subMenuList2", new Attribute(Const.subMenuList2), true);
		attributeContext.putAttribute("subMenuList3", new Attribute(Const.subMenuList3), true);
		attributeContext.putAttribute("subMenuList4", new Attribute(Const.subMenuList4), true);
		attributeContext.putAttribute("subMenuList5", new Attribute(Const.subMenuList5), true);
		attributeContext.putAttribute("subMenuList6", new Attribute(Const.subMenuList6), true);
		attributeContext.putAttribute("subMenuList7", new Attribute(Const.subMenuList7), true);
		attributeContext.putAttribute("subMenuList8", new Attribute(Const.subMenuList8), true);
		attributeContext.putAttribute("subMenuList9", new Attribute(Const.subMenuList9), true);
		attributeContext.putAttribute("subMenuList10", new Attribute(Const.subMenuList10), true);
		
	}
	
	
	
}
