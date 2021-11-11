package com.halfmoon.market.socket;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.model.domain.UserDomain;

public class ReplyEchoHandler extends TextWebSocketHandler{
	List<WebSocketSession> sessions = new ArrayList<WebSocketSession>();
	Map<String,WebSocketSession> userSessions =  new HashMap<>();
	
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		sessions.add(session);
		String senderId = getId(session);
		userSessions.put(senderId, session);
		
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		System.out.println("handleTextMessage"+session+":"+message);
		String senderId = getId(session);
		String msg = message.getPayload();
		System.out.println("test1");
//		for (WebSocketSession sess: sessions) {
//			sess.sendMessage(new TextMessage(senderId +": "+message.getPayload()));
//		}
		if(StringUtils.isNotEmpty(msg)) {
			System.out.println("test2");
			String[] strs =msg.split(",");
			System.out.println(strs.length);
			if(strs !=null && strs.length ==7) {
				System.out.println("test3");
				String cmd = strs[0];
				String UserNm = strs[1];
				String writer = strs[2];
				String i_product = strs[3];
				String item_title = strs[4];
				String item_i_user = strs[5];
				String i_product_type = strs[6];
				System.out.println("payloadTest:"+strs[0]+strs[1]+strs[2]+strs[3]+strs[4]+strs[5]+strs[6]);
				System.out.println("payloadTest2:"+cmd+","+UserNm+","+writer+","+i_product+","+item_title+","+item_i_user+","+i_product_type);
				
				WebSocketSession writerSession =  userSessions.get(writer);
				if("reply".equals(cmd) && writerSession != null){
					System.out.println("test4");
					TextMessage tmpMsg = new TextMessage(UserNm +"님이 "+
					"<a href='/sale/detail?i_product="+i_product+"&i_user=" +item_i_user+"&i_product_type="+i_product_type+"'>"+item_title+" 게시글에 댓글을 달았습니다.");
					writerSession.sendMessage(tmpMsg);
					System.out.println(tmpMsg);
				}
					
			}
		}else {
			System.out.println("test5");
	}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
	}

	private String getId(WebSocketSession session) {
		Map<String,Object> httpSession = session.getAttributes();
		UserDomain loginUser = (UserDomain)httpSession.get(Const.KEY_LOGINUSER);
		if(null == loginUser) {
			return session.getId();
		}else {
			return loginUser.getUser_nm();
		}
	}
	
}
