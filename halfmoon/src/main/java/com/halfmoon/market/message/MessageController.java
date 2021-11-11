package com.halfmoon.market.message;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.halfmoon.market.model.dto.MessageDTO;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MessageController {
	
	private final SimpMessagingTemplate temp;
	
	@MessageMapping("/chat/enter")
	public void enter(MessageDTO message) {
		message.setMessage(message.getWriter()+ "님이 채팅방에 참여하였습니다.");
		temp.convertAndSend("/sub/chat/room/" + message.getRoomId(),message);
	}
	
	@MessageMapping("/chat/message")
	public void message(MessageDTO message) {
		temp.convertAndSend("/sub/chat/room/"+message.getRoomId(),message);
	}
	
	
}
