package com.halfmoon.market.message;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.halfmoon.market.model.dto.MessageDTO;

@Repository
public class MessageDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<MessageDTO> messageList(MessageDTO dto){
		String nick = dto.getNick();
		
		List<MessageDTO> list = sqlSession.selectList("Message_list",dto);
		
		for(MessageDTO mto : list) {
			mto.setNick(nick);
			int unread = sqlSession.selectOne("count_unread",dto);
			String profile = sqlSession.selectOne("get_other_profile",dto);
			mto.setUnread(unread);
			mto.setProfile_img(profile);
			
			if (nick.equals(mto.getSend_nick())) {
				mto.setOther_nick(mto.getRecv_nick());
			}else {
				mto.setOther_nick(mto.getSend_nick());
			}
		}
		
		return list;
		
	}
	
	public List<MessageDTO> roomContetnList(MessageDTO dto){
		
		List<MessageDTO> clist = sqlSession.selectList("room_content_list",dto);
		
		sqlSession.update("message_read_chk",dto);
		
		return clist;
		
	}
	
	public int messageSendInlist(MessageDTO dto) {
		if(dto.getRoom() == 0) {
			int exist_chat = sqlSession.selectOne("exist_chat",dto);
			if(exist_chat ==0) {
				int max_room = sqlSession.selectOne("max_room",dto);
				dto.setRoom(max_room+1);
			}else {
				int room = Integer.parseInt(sqlSession.selectOne("select_room",dto));
				dto.setRoom(room);
			}
		}
		
		int flag = sqlSession.insert("messageSendInlist",dto);
		return flag;
	}

}
