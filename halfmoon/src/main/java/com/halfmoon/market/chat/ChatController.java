package com.halfmoon.market.chat;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.halfmoon.market.model.dto.UserDTO;

import lombok.extern.log4j.Log4j;

@Controller
@Log4j
public class ChatController {
	@GetMapping("/chat/chat/chat")
	public void chat(Model model) {
		
		UserDTO dto = new UserDTO();
		
		log.info("==============================================");
		log.info("@ChatController, GET Chat / Username :" + dto.getUser_nm() );
		
		model.addAttribute("userid",dto.getUser_nm());
	}
}
