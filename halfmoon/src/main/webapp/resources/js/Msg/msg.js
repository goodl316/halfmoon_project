const FirstMessageList = function() {
	$.ajax({
		url: "message_ajax_list.do",
		method: "get",
		data: {
		},
		success: function(data) {
			$('.inbox_chat').html(data);

			$('.chat_list').on('click', function() {
				let room = $(this).attr('room')
				let other_nick = $(this).attr('other-nick');

				$('.chat_list_box').not('.chat_list_box.chat_list_box' + room).removeClass('active_chat');
				$('.chat_list_bot').addClass('active_chat');

				let send_msg = "";
				send_msg += "<div class='type_msg'>";
				send_msg += "	<div class='input_msg_write row'>";
				send_msg += "		<div class='col_11'>";
				send_msg += "			<input type='text' class='write_msg form-control' placeholder='메시지를 입력...'/>";
				send_msg += "		</div>";
				send_msg += "		<div class='col-1'>";
				send_msg += "			<button class='msg_send_btn' type='button'><i class='fa fa-paper-plane-o' aria-hidden='true'></i></button>";
				send_msg += "		</div>";
				send_msg += "	</div>";

				//메시지를 입력, 전송 칸을 보인다.
				$('.send_message').html(send_msg);
				//메시지 전송버튼을 눌렀을 때
				$('.msg_send_btn').on('click', function() {

					SendMessage(room, other_nick)
				});

				MessageContentList(room);
			})

		}
	})
}
const MessageList = function() {
	$.ajax({
		url: "message_content_list.do",
		method: "GET",
		data: {
		},
		success: function(data) {
			$('.inbox_chat').html(data);

			$('.chat_list').on('click', function() {
				let room = $(this).attr('room')
				let other_nick = $(this).attr('other-nick');

				$('.chat_list_box').not('.chat_list_box.chat_list_box' + room).removeClass('active_chat');
				$('.chat_list_bot').addClass('active_chat');

				let send_msg = "";
				send_msg += "<div class='type_msg'>";
				send_msg += "	<div class='input_msg_write row'>";
				send_msg += "		<div class='col_11'>";
				send_msg += "			<input type='text' class='write_msg form-control' placeholder='메시지를 입력...'/>";
				send_msg += "		</div>";
				send_msg += "		<div class='col-1'>";
				send_msg += "			<button class='msg_send_btn' type='button'><i class='fa fa-paper-plane-o' aria-hidden='true'></i></button>";
				send_msg += "		</div>";
				send_msg += "	</div>";
				send_msg += "</div>";

				//메시지를 입력, 전송 칸을 보인다.
				$('.send_message').html(send_msg);
				//메시지 전송버튼을 눌렀을 때
				$('.msg_send_btn').on('click', function() {

					SendMessage(room, other_nick)
				});

				MessageContentList(room);
			});
			$('.chat_list_box:frist').addClass('active_chat');
		}

	})

}

const MessageContentList = function(room) {
	$.ajax({
		url: "message_content_list.do",
		method: "get",
		data: {
			room: room
		},
		success: function(data) {
			$('.msg_history').html(data)
			$('.msg_history').scrollTop($(".msg_history")[0].scrollHeight)
		},
		error: function() {
			alert('서버 에러')
		}
	})
	$('.unread' + room).empty();
}


const SendMessage = function(room, other_nick) {
	let content = $('.write_msg').val();
	content = content.trim();
	if (content == "") {
		alert("메시지를 입력하세요!")
	} else {
		$.ajax({
			url: "message_send_inlist.do",
			method: "GET",
			data: {
				room: room,
				other_nick: other_nick,
				ms_ctnt: ms_ctnt
			},
			success: function(data) {
				$('.write_msg').val("");
				MessageContentList(room);
				MessageList();
			},
			error : function(){
				alert('서버 에러')
			}
		})
	}
}


$(document).ready(function() {
	FirstMessageList();
})