package com.halfmoon.market.user;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.model.dto.UserDTO;

@Controller
public class UserController {
	
	@Autowired
	private UserService service;
	@Autowired
	HttpSession hs;
	
	@GetMapping("/login")
	public void login() {
		
	}
	
	@GetMapping("/logout")
	public String logout() {
		hs.invalidate();
		return "redirect:/main/home";
	}
	
	@GetMapping("/join")
	public void join() {
		
	}
	
	@ResponseBody
	@PostMapping("/loginProc")
	public Map<String,Object> loginProc(@RequestBody UserDTO p) {
		System.out.println(p.getClk_pw());
		System.out.println(p.getId_email());
		Map<String, Object> val = new HashMap<>();
		val.put(Const.KEY_RESULT, service.login(p));
		return val;
	}
	
	@ResponseBody
	@PostMapping("/joinProc")
	public Map<String,Object> joinProc(@RequestBody UserDTO p) {
		Map<String, Object> val = new HashMap<>();
		val.put(Const.KEY_RESULT, service.join(p));
		
		return val;
	}
	/*  프로필,마이페이지,비밀번호 찾기 기능 추가해야함  */
	@GetMapping("/profile")
	public void profile() {}
	
	@PostMapping("/profile")
	@ResponseBody
	public Map<String,Object> prfileProc(@RequestBody UserDTO p){
		Map<String,Object> val = new HashMap<String, Object>();
		
		return val;
	}
}
