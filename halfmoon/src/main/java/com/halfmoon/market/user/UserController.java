package com.halfmoon.market.user;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.UserDTO;

@Controller
public class UserController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	HttpSession hs;
	
	@GetMapping("/login")
	public void login() {}
	
	@GetMapping("/logout")
	public String logout() {
		hs.invalidate();
		return "redirect:/main/home";
	}
	
	@GetMapping("/join")
	public void join() {}
	
	@GetMapping("/test")
	public void test() {}
	
	@ResponseBody
	@PostMapping("/loginProc")
	public Map<String,Object> loginProc(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<>();
		int result = service.login(dto);
		val.put(Const.KEY_RESULT, result);
		if(result == 2 || result == 3) {
			return val;
		}
		service.updCode(dto);
		return val;
	}
	
	@ResponseBody
	@PostMapping("/joinProc")
	public Map<String,Object> joinProc(@RequestBody UserDTO dto) {
		// proc : 일단회원가입(코드삽입) -> 코드와 i_user값 가져와서 ->  
		Map<String, Object> val = new HashMap<>();
		val.put(Const.KEY_RESULT, service.join(dto));
		return val;
	}
	
	@GetMapping("/joinSucess")
	public void joinSucess(Model model, UserDTO dto) {
		System.out.println("sucess : " + dto.getI_user());
		// 회원권한 승인 및 로그인 처리.
		UserDomain vo = service.updAuth(dto);
		model.addAttribute("user_nm", vo.getUser_nm());
	}
	
	@GetMapping("/user/my/profile")
	public String profile(Model model, Integer page) {
		// set loginUser
		UserEntity user = (UserEntity) hs.getAttribute(Const.KEY_LOGINUSER);
		if (user == null) {
			return "/login";
		}
		UserDTO dto = new UserDTO();
		dto.setI_user(user.getI_user());
		model.addAttribute(Const.KEY_LOGINUSER, service.selUser(dto));

		System.out.println("page : " + page);
		if (page == null) {
			page = 0; // default == 0
		}
		switch (page) {
			case 0:
				model.addAttribute(Const.KEY_PAGE, "/WEB-INF/views/user/my/template/default.jsp");
				return "/user/my/profile";
			case 1:
				model.addAttribute(Const.KEY_PAGE, "/WEB-INF/views/user/my/template/mySaleList.jsp");
				// 내 판매 목록 뿌리기
				model.addAttribute(Const.KEY_LIST, service.selMySaleList(dto));
				return "/user/my/profile";
			case 2:
				model.addAttribute(Const.KEY_PAGE, "/WEB-INF/views/user/my/template/modAccount.jsp");
				return "/user/my/profile";
			case 3:
				model.addAttribute(Const.KEY_PAGE, "/WEB-INF/views/user/my/template/purchaseInfo.jsp");
				model.addAttribute(Const.KEY_LIST, service.selMySaleList(dto));
				return "/user/my/profile";
			case 4:
				model.addAttribute(Const.KEY_PAGE, "/WEB-INF/views/user/my/template/saleInfo.jsp");
				model.addAttribute(Const.KEY_LIST, service.selMySaleList(dto));
				return "/user/my/profile";
		}
		return null;
	}
	
	@GetMapping("/user/my/changePw")
	public void changePw() {}
	
	//비밀번호 변경시 기존 비밀번호 확인후 팝업창 생성
	@ResponseBody
	@PostMapping("/user/my/updPw")
	public Map<String,Object> chPw(@RequestBody UserDTO p) {
		UserDomain vo  = service.selUser(p);
		if(!BCrypt.checkpw(p.getClk_pw(), vo.getUser_pw())) { //비밀번호 틀린경우
			Map<String,Object> val = new HashMap<String, Object>();
			val.put(Const.KEY_RESULT, 2);
			return val;
			
		} else {
			Map<String,Object> val = new HashMap<String, Object>();
			val.put(Const.KEY_RESULT, 1);
			return val;
		}
		
	}
	//유저 비밀번호,주소,핸드폰 번호 변경
	
	@ResponseBody
	@PostMapping("/user/my/updUser")
	public Map<String,Object> updUser(@RequestBody UserDTO p,MultipartFile[] imgs) {
		
		System.out.println("first pk : " + p.getI_user());
		System.out.println("aaa : "+p.getProfile_img());
		System.out.println(p.getState());
		Map<String,Object> val = new HashMap<String, Object>();
		if(p.getState()==1) {
			
			val.put(Const.KEY_RESULT, service.updPw(p));
		}
		else if(p.getState()==2) {
			val.put(Const.KEY_RESULT, service.updAddr(p));
		}
		else if(p.getState()==3) {
			val.put(Const.KEY_RESULT, service.updPh(p));
		}
		UserEntity vo = service.selUser(p);
		System.out.println("bbb:"+vo.getProfile_img());
		hs.setAttribute(Const.KEY_LOGINUSER, service.selUser(p));
		return val;	
	}
	
	//유저 프로필 이미지 등록, 변경
	
	@ResponseBody
	@PostMapping("/user/my/updProfile")
	public Map<String,Object> profileUpload(UserDTO p,MultipartFile[] imgs) {
		Map<String,Object> val = new HashMap<String, Object>();
		val.put(Const.KEY_RESULT, service.profileUpload(p,imgs));
		UserEntity vo = service.selUser(p);
		hs.setAttribute(Const.KEY_LOGINUSER, service.selUser(p));
		val.put(Const.KEY_LOGINUSER, vo);
		return val;
	}
	
	
	@ResponseBody
	@PutMapping("/user/delImg")
	public int delProfileImg(UserDTO p) {
		return service.delProfileImg(p);
	}
	
	// ======================= 비밀번호 찾기 =============== //
	
	@GetMapping("/user/my/findInfo")
	public void findInfo() {}
	
	// =================== 판매자 센터 ===================//
	@GetMapping("/user/my/salePage")
	public void salePage() {}


}












