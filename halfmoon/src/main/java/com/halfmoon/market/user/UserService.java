package com.halfmoon.market.user;

import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.dto.UserDTO;

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
		UserEntity vo = selUser(p);
		System.out.println(vo + "23232");
		if(vo == null) {
			return 2;
		}
		p.setUser_pw(vo.getUser_pw());
		if(!BCrypt.checkpw(p.getClk_pw(), vo.getUser_pw())) {
			return 3;
		}
		vo.setUser_pw(null);
		hs.setAttribute(Const.KEY_LOGINUSER, vo);
		return 1;
	}
	
	public int join(UserDTO p) {
		String encryptPw = SecurityUtils.hashPassword(p.getUser_pw(), SecurityUtils.getsalt());
		p.setUser_pw(encryptPw);
		
		return mapper.insUser(p);
	}
}
