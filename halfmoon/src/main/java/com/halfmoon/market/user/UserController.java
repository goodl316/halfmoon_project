package com.halfmoon.market.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.halfmoon.market.model.UserDTO;

@Controller
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/login")
	public void login() {
		
	}
	
	@GetMapping("/join")
	public void join() {
		
	}
	
	@PostMapping("/login")
	public String loginProc(UserDTO p) {
		int result = service.login(p);
		
		if(result == 1) {
			return "redirect:/main/home";
		}
		
		return null;
	}
	
	@ResponseBody
	@PostMapping("/join")
	public void joinProc(@RequestBody UserDTO p) {
		service.join(p);
		
	}
}
