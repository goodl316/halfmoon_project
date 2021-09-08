package com.halfmoon.market.message;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.halfmoon.market.model.dto.MessageDTO;

@Controller
public class MsgController {
	
	@Autowired
	private MessageDAO dao;
	
	@RequestMapping(value = "/message_list.do")
	public String message_list(HttpServletRequest req,HttpSession hs) {
		String nick = (String)hs.getAttribute("nick");
		MessageDTO dto = new MessageDTO();
		dto.setNick(nick);
		
		List<MessageDTO> list = dao.messageList(dto);
		req.setAttribute("list", list);
		return "comm/msg/msgBox";
	}
	
	@RequestMapping(value="/message_ajax_list.do")
	public String message_ajax_list(HttpServletRequest req, HttpSession hs) {
		String nick=(String)hs.getAttribute("nick");
		MessageDTO dto = new MessageDTO();
		dto.setNick(nick);
		
		List<MessageDTO> list = dao.messageList(dto);
		req.setAttribute("list", list);
		
		return "comm/msg/msgList";
	}
	
	@RequestMapping(value="/message_content_list.do")
	public String message_content_list(HttpServletRequest req, HttpSession hs) {
		
		
		int room = Integer.parseInt(req.getParameter("room"));
		MessageDTO dto = new MessageDTO();
		dto.setRoom(room);
		dto.setNick((String) hs.getAttribute("nick"));
		
		List<MessageDTO> clist = dao.roomContetnList(dto);
		req.setAttribute("clist", clist);
		
		return "comm/msg/contentList";
	}
	
	
	
	
	
	@ResponseBody
	@RequestMapping(value="/message_send_inlist.do")
	public int message_send_inlist(@RequestParam int room, @RequestParam String other_nick,@RequestParam String content, HttpSession hs) {
		
		MessageDTO dto = new MessageDTO();
		dto.setNick((String)hs.getAttribute("nick"));
		dto.setRoom(room);
		dto.setRecv_nick(other_nick);
		dto.setContetn(content);
		
		int flag = dao.messageSendInlist(dto);
		
		return flag;
	}

}
