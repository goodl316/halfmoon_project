<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<div class="container">
	<div class="col-6">
		<label><b>채팅방</b></label>
	</div>
	<div>
		<div id="msgArea" class="col">
		
		</div>
		<div class="col-6">
		<div class="input-group mb-3">
			<input type="text" id="msg" class="form-contorl" aria-label="Recipient's username" aria-describedby="button-addon2">
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" value="전송" id="button-send"></button>
			</div>
		</div>
		</div>
	</div>
	<div class="col-6">
	</div>
	
</div>
<script type="text/javascript">
//전송 버튼 누르는 이벤트
$("button-send").on("click", function(e){
	sendMessage();
	$('#msg').val('')
});

var sock = new SockJS('http://localhost:8090/chatting');
sock.onmessage = onMessage;
sock.onclose = onClose;
sock.onopen= onOpen;

function sendMessage() {
	sock.send($("#msg").val());
}

function onMessage(msg){
	var data = msg.data;
	var sessionId = null;
	var message = null;
	
	var arr = data.split(":");
	
	for(var i=0; i=arr.length; i++){
		console.log('arr['+i+']'+arr[i]);
	}
	
	var cur_session = '${userid}';
	console.log("cur_session" + cur_session);
	
	sessionId= arr[0];
	message = arr[1];
	
	if(sessionId == cur_session){
		
		var str = "div class='col-6'>";
		str += "div class='alert alert-secondary'>";
		str += "<b>" + sessionId+":"+message+"</b>";
		str += "</div></div>";
		$("#msgArea").append(str);
		
	}
	else{
		var str = "div class='col-6'>";
		str += "div class='alert alert-warning'>";
		str += "<b>" + sessionId+":"+message+"</b>";
		str += "</div></div>";
		
		$("#msgArea").append(str);
	}
	
	//채팅창에서 나갔을 때
	function onClose(evt){
		var user = '${loginUser.user_name}';
		var str = user + "님이 퇴장하였습니다.";
		$("#msgArea").append(str);
	}
	function onOpen(evt){
		var user = '${loginUser.user_name}';
		var str = user + "님이 입장하였습니다.";
		$("#msgArea").append(str);
	}
}

</script>