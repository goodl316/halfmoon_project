package com.halfmoon.market.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.halfmoon.market.model.UserEntity;

@Controller
public class UserController {
	
	@GetMapping("/login")
	public void login() {
		
	}
	
	@GetMapping("/join")
	public void join() {
		
	}
	
	@PostMapping("/login")
	public void loginProc(UserEntity parma) {
		
	}
}
