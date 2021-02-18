package com.halfmoon.market.common;

import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.halfmoon.market.model.UserDTO;
import com.halfmoon.market.model.UserEntity;

public class SecurityUtils {
	@Autowired
	private static HttpSession hs;
	
	
	//true: 로그인된 상태, false: 로그아웃 된 상태
	public static boolean isLogin() {
		return getLoginUser() != null;
	}
	
	public static UserEntity getLoginUser() {		
		return (UserEntity) hs.getAttribute(Const.KEY_LOGINUSER);
	}
	
	public static int getLoingUserPk() {
		UserEntity loginUser = getLoginUser();
		return loginUser == null ? -1 : loginUser.getI_user();
	}
	
	public static String getsalt() {
		return BCrypt.gensalt();
	}

	public static String hashPassword(String pw, String salt) {
		return BCrypt.hashpw(pw, salt);
	}
	
	public static boolean checkPassword(UserDTO p) {
		if (BCrypt.checkpw(p.getUser_pw(), p.getClk_pw())){
			return true;
		}
		return false;
	}
	
	public static String getPrivateCode(int len) {
		String str = "";		
		for(int i=0; i<len; i++) {
			str += (int)(Math.random() * 10);
		}
		return str;
	}

}
