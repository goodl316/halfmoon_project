package com.halfmoon.market.user;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.UserDTO;
import com.halfmoon.market.model.UserEntity;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	@Autowired
	private HttpSession hs;
	
	public UserEntity selUser(UserDTO p) {
		return mapper.selUser(p);
	}
	
	public int login(UserDTO p) {
		UserEntity dbData = selUser(p);
		if(dbData == null) {
			return 2;
		}
		if(SecurityUtils.chekPassword(p)) {
			return 3;
		}
		dbData.setUser_pw(null);
		hs.setAttribute(Const.KEY_LOGINUSER, dbData);
		return 1;
	}
	
	public int join(UserDTO p) {
		String encryptPw = SecurityUtils.hashPassword(p.getUser_pw(), SecurityUtils.getsalt());
		p.setUser_pw(encryptPw);
		
		return mapper.insUser(p);
	}
}
