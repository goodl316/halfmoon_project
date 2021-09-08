<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="/res/js/Msg/msg.js"></script>
<link rel="stylesheet" href="/res/css/message/message_list.css">
</head>
<body>
	<div class="msg_container">
	
		<div class="messaging">
			<div class="inbox_msg">
				<div class="headind_srch">
					<div class="recent_heading">
						<h4>Recent</h4>
					</div>
					<!-- Message Search -->
					<div class="srch_bar">
						<div class="stylsh_input_group">
							<input type="text" class="search_bar" placeholder="Search">
							<span class="input_group_addon">
								<button type="button">
									<i class="fa fa_search" aria-hidden="true"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="inbox_chat">
				</div>
			</div>
			<!-- Message List -->
			<div class="mesags">
				<!-- Message ctnt List -->
				<div class="msg_history" name="contentList">
					<!-- Message Ctnt -->
				</div>
				<div class="send_message">
				</div>
				<!-- 메시지 입력란이 올자리 -->
			</div>
		</div>
	</div>

</body>
</html>