package com.halfmoon.market.message;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller
@RequiredArgsConstructor
@RequestMapping("/chat")
@Log4j
public class RoomController {
	
	private final ChatRoomRepository repository;
	
	@GetMapping("/rooms")
	public ModelAndView rooms() {
		log.info("# All Chat Rooms");
		ModelAndView mv = new ModelAndView("chat/rooms");
		mv.addObject("list",repository.findAllRooms());
		return mv;
	}
	
	@PostMapping("/room")
	public String create(@RequestParam String name, RedirectAttributes rttr) {
		
		log.info("# Create Chat Room, name:"+name);
		rttr.addFlashAttribute("roomName", repository.createChatRoomEntity(name));
		return "redirect:/chat/rooms";
	}
	
	@GetMapping("/room")
	public void getRoom(String roomId, Model model) {
		log.info("# get Chat Room, roomId :"+roomId);
		model.addAttribute("room",repository.findroomById(roomId));
	}
	
	
	

}
