package com.halfmoon.market.user;

import java.util.HashMap;
import java.util.Map;

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
		System.out.println("ddd");
		int result = service.login(p);
		
		if(result == 1) {
			return "redirect:/main/home";
		}
		
		return null;
	}
	
	@ResponseBody
	@PostMapping("/joinProc")
	public Map<String,Object> joinProc(@RequestBody UserDTO p) {
		System.out.println("11111");
		Map<String, Object> val = new HashMap<>();
		val.put("result", service.join(p));
		
		return val;
	}
}
