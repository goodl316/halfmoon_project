package com.halfmoon.market.user;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.halfmoon.market.model.UserDTO;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	@Autowired
	private HttpSession hs;
	
	
	public int login(UserDTO p) {
		
		
		
		return 1;
	}
}
