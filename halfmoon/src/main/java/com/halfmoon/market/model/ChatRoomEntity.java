package com.halfmoon.market.model;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.web.socket.WebSocketSession;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatRoomEntity {

	private String roomId;
	private String name;
	private Set<WebSocketSession> sessions = new HashSet<>();
	
	public static ChatRoomEntity create(String name) {
		ChatRoomEntity room = new ChatRoomEntity();
		
		room.roomId = UUID.randomUUID().toString();
		room.name = name;
		return room;
	}
	
}
