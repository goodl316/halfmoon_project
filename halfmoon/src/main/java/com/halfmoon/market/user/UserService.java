package com.halfmoon.market.user;

import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.UserEntity;
import com.halfmoon.market.model.dto.UserDTO;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	@Autowired
	private HttpSession hs;
	@Autowired
	private FileUtils fUtils;
	
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
	
	/* profile 작업*/
	
	public int updPw(UserDTO p) {
		p.setStatus(1);
		return mapper.updUser(p);
	}
	
	public int profileUpload(MultipartFile[] imgs,UserDTO p) {	
		int i_user = SecurityUtils.getLoingUserPk();
		p.setStatus(2);
		if(i_user < 1 || imgs.length == 0) {
			return 0;
		}
		
		String folder = "/resources/img/user/" + i_user;		
				
		try {
			for(int i=0; i<imgs.length; i++) { //반복문 필요없을거 같음
				MultipartFile file = imgs[i];
				String fileNm = fUtils.saveFile(file, folder);
				if(fileNm == null) {
					return 0;
				}
				if(i==0) { //메인 이미지 업데이트
					p.setI_user(i_user);
					p.setProfile_img(fileNm);	
					mapper.updUser(p);
				}				
			}
		} catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
		return 1;
	}
	
	public int updAddr(UserDTO p) {
		return mapper.updUser(p);
	}
	
}
