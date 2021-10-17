package com.halfmoon.market.common;

import java.util.List;

import com.halfmoon.market.model.domain.ProductTypeDomain;
import com.halfmoon.market.model.domain.ProductTypeSubDomain;

public class Const {

public static List<ProductTypeDomain> menuList = null;
public static List<ProductTypeSubDomain> subMenuList = null;


	public static final String titleArr[] = {"디지털/가전","스포츠/레저","여성의류","남성의류","가구/인테리어","생활/가공식품","게임/취미","반려동물","도서/티켓/음반","유아용품"};
	public static final String locArr[] = {"중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"};
	public static final String KEY_PAGE = "page";
	public static final String KEY_LOGINUSER = "loginUser";
	public static final String KEY_LIST = "list";
	public static final String KEY_DATA = "data";
	public static final String KEY_RESULT = "result";
	public static final int CODE_LENGTH = 10;
	
	public static final int AUTH_REST_SEC = 300;

}
