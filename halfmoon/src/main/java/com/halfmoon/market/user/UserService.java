package com.halfmoon.market.user;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.MailUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.UserDTO;

@Service
public class UserService {

	@Autowired
	private UserMapper mapper;

	@Autowired
	private HttpSession hs;

	@Autowired
	private MailUtils mUtils;
	@Autowired
	private FileUtils fUtils;

	public UserDomain selUser(UserDTO dto) {
		return mapper.selUser(dto);
	}
	UserDomain findUser(UserDTO dto) {
		return mapper.findUser(dto);
	}
	// ----로그인-----
	public int login(UserDTO dto) {
		UserDomain vo = mapper.selUser(dto);
		
		if (vo == null) {
			return 2;
		}
		dto.setUser_pw(vo.getUser_pw());
		if (!BCrypt.checkpw(dto.getClk_pw(), vo.getUser_pw())) {
			System.out.println(vo.getUser_pw());
			return 3;
		}
		
		vo.setUser_pw(null);
		hs.setAttribute(Const.KEY_LOGINUSER, vo);
		return 1;
	}
	// ----아이디 찾기-----
	public int findId(UserDTO dto) {
		UserDomain vo = mapper.findId(dto);
		
		if(vo == null) {
			return 2;
		}
		vo.setCode(null);
		hs.setAttribute(Const.KEY_LOGINUSER, vo);
		return 1;
	}
	// ----비밀번호 찾기-----
	public int findPw(UserDTO dto) {
		UserDomain vo = mapper.findPw(dto);
		
		if(vo==null) {
			return 2;
		}
		
		return 1;
	}
	
	
	public int chkJoinMail(UserDTO dto) {
		return mUtils.sendJoinEmail(dto.getId_email(), dto);
	}
	
	public int chkFindPwMail(UserDomain vo) {
		System.out.println("asd:"+vo.getId_email());
		System.out.println("aass:"+vo.getCode());
		return mUtils.sendFindPwEmail(vo.getId_email(), vo.getCode());
	}
	
	public int sendCode(UserDTO dto) {
		int result = 0;
		UserDomain vo = mapper.chkMail(dto);
		
		if(vo == null) {
			return 2;
		}
		
		result= chkFindPwMail(vo);
		System.out.println("result : "+result);
		return result;
	}
	
	public int chkCode(UserDTO dto) {
		UserDomain vo = mapper.chkMail(dto);
		
		if(vo==null) {
			return 3;
		}
		
		if(!dto.getCode().equals(vo.getCode())) {
			return 2;
		}
		
		return 1;
	}

	public int join(UserDTO dto) {
		int result = 0;
		// 비밀번호 암호화
		String encryptPw = SecurityUtils.hashPassword(dto.getUser_pw(), SecurityUtils.getsalt());
		dto.setUser_pw(encryptPw);
		dto.setCode(SecurityUtils.authCode(5));

		// 정보 입력
		result = mapper.insUser(dto);
		System.out.println("join i_user : " + dto.getI_user());
		if (result == 0) {
			return 2; // 2: 정보입력 실패 : 중복된 ID
		}
		// 인증메일 전송
		System.out.println("send mail...");
		result = chkJoinMail(dto);
		System.out.println("result : " + result);
		return result;
	}

	UserDomain updAuth(UserDTO dto) {
		// 권한 승인
		mapper.updAuth(dto);
		// 로그인 처리
		UserDomain vo = mapper.selUser(dto);
		vo.setUser_pw(null);
		hs.setAttribute(Const.KEY_LOGINUSER, vo);
		return vo;
	}

	/* profile 작업 */

	public int updPw(UserDTO dto) {
		if( SecurityUtils.getUserPk(hs) != 0) {
			System.out.println("asdasdasd");
			dto.setI_user(SecurityUtils.getUserPk(hs));
		}
		System.out.println(dto.getState());
		System.out.println(dto.getUser_pw());
		String encryptPw = SecurityUtils.hashPassword(dto.getUser_pw(), SecurityUtils.getsalt());
		dto.setUser_pw(encryptPw);
		mapper.updUser(dto);
		System.out.println(dto.getUser_pw());
		return 1;

	}
	
	

	public int profileUpload(UserDTO p, MultipartFile[] imgs) {
		p.setI_user(SecurityUtils.getUserPk(hs));
		if (p.getI_user() < 1 || imgs.length == 0) {
			return 0;
		}

		String folder = "/resources/img/user/" + p.getI_user();
		try {
			for(int i=0; i<imgs.length; i++) { //반복문 필요없을거 같음
				MultipartFile file = imgs[i];
				String fileNm = fUtils.saveFile(file, folder);
				if(fileNm == null) {
					return 0;
				}
				if(i==0) { //메인 이미지 업데이트
					p.setI_user(p.getI_user());
					p.setProfile_img(fileNm);	
					mapper.updProfileImg(p);
				}				
			}

		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		return 1;
	}

	public int updAddr(UserDTO p) {
		p.setI_user(SecurityUtils.getUserPk(hs));
		int result = mapper.updUser(p);
		return result;
	}

	public int updPh(UserDTO p) {
		p.setI_user(SecurityUtils.getUserPk(hs));
		int result = mapper.updUser(p);
		return result;
	}

	public int updCode(UserDTO p) {
		String code = SecurityUtils.authCode(5);
		p.setCode(code);
		p.setI_user(SecurityUtils.getUserPk(hs));
		return mapper.updCode(p);
	}

	public int delProfileImg(UserDTO p) {
		p.setI_user(SecurityUtils.getUserPk(hs));
		System.out.println("profile_img:" + p.getProfile_img());
		int result = mapper.delUserImg(p);
		if (result == 1) {
			String path = "/img/user/" + p.getI_user() + "/" + p.getProfile_img();
			System.out.println("path:" + path);
			fUtils.delFile(path);
		}

		return result;
	}
	//내 판매 목록 띄우기
	List<ProductSaleDomain> selMySaleList(UserDTO dto) {
		return mapper.selMySaleList(dto);
	}
	
	//내 찜목록 
	List<ProductSaleDomain> selFavoriteMyList(UserDTO dto) {
		dto.setI_user(SecurityUtils.getUserPk(hs));
		System.out.println("favorite"+dto.getI_user());
		return mapper.selFavoriteMyList(dto);
	}
}
