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
import org.springframework.web.multipart.MultipartFile;

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
	
	@ResponseBody
	@PostMapping("/updPw")
	public Map<String,Object> chPw(UserDTO p) {
		Map<String,Object> val = new HashMap<String, Object>();
		val.put(Const.KEY_RESULT, service.updPw(p));
		return val;
	}
	
	@ResponseBody
	@PostMapping("/profileUpload")
	public Map<String,Object> profileUpload(MultipartFile[] imgs,UserDTO p) {
		System.out.println("imgs : " + imgs.length);
		Map<String,Object> val = new HashMap<String, Object>();
		val.put(Const.KEY_RESULT, service.profileUpload(imgs,p));
		return val;
	}
	
	@ResponseBody
	@PostMapping("/updPw")
	public Map<String,Object> chAddr(UserDTO p) {
		Map<String,Object> val = new HashMap<String, Object>();
		val.put(Const.KEY_RESULT, service.updAddr(p));
		return val;
	}
	
	
	
	@PostMapping("/profile")
	@ResponseBody
	public Map<String,Object> prfileProc(@RequestBody UserDTO p){
		Map<String,Object> val = new HashMap<String, Object>();
		
		return val;
	}
}
