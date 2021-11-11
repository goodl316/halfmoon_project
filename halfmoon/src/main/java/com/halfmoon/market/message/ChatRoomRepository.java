package com.halfmoon.market.message;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.halfmoon.market.model.ChatRoomEntity;

@Repository
public class ChatRoomRepository {

	private Map<String, ChatRoomEntity> chatRoomEntityMap;
	
	@PostConstruct
	private void init() {
		chatRoomEntityMap = new LinkedHashMap<>();
	}
	
	public List<ChatRoomEntity> findAllRooms(){
		List<ChatRoomEntity> result = new ArrayList<>(chatRoomEntityMap.values());
		Collections.reverse(result);
		
		return result;
	}
	
	public ChatRoomEntity findroomById(String id) {
		return chatRoomEntityMap.get(id);
	}
	
	public ChatRoomEntity createChatRoomEntity(String name) {
		ChatRoomEntity room = ChatRoomEntity.create(name);
		chatRoomEntityMap.put(room.getRoomId(), room);
		
		return room;
		
	}
}
