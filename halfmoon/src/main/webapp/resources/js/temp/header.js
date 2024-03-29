var btn_my_sell = document.querySelector('#btn_my_sell')
var main_nav = document.querySelector('#main-nav')
var sub_nav_cont = document.querySelector('#sub_nav_cont')
var sub_nav = document.querySelector('#sub_nav')
var main_form_input = document.querySelector('.main_form_input')
// sub_nav의 자식객체
//var reg_sub = document.querySelector('#reg_sub')
var detail_sub = document.querySelector('#detail_sub')

console.log(window.location.href)

// 현재 url 위치 파싱 (자주 쓰일 듯.)
function getUrl() {
    var url = window.location.href.split('/')
    var val = '/';
    for (var i = 3; i < url.length; i++) {
        val += url[i]
        if (i != url.length - 1) {
            val += '/'
        }
    }
    return val;
}

console.log(getUrl())

// ===================== 페이지 파싱 라인 start =========================
// 상품등록페이지일때 menuList none and 위치 표시
if (getUrl() === '/sale/regProduct') {
    sub_nav_cont.style.display = 'block'
    sub_nav.style.display = 'block'
	reg_sub.style.display = 'block'
 	detail_sub.style.display = 'none'
    main_h3.innerHTML = '<h3>반월마켓 판매자센터</h3>'
	main_nav.style.display = 'none'
}
// saleDetail 페이지
if (getUrl().includes('/sale/detail')) {
    sub_nav_cont.style.display = 'block'
    sub_nav.style.display = 'block'
    reg_sub.style.display = 'none'
    detail_sub.style.display = 'block'
    main_h3.innerHTML = '<h3>반월마켓 상품구매</h3>'
	main_nav.style.display = 'none'
}

// ===================== 페이지 파싱 라인 end  =========================

// 물건팔기 ajax
btn_my_sell.onclick = function () {
    btn_my_sell_ajax()
}

function btn_my_sell_ajax() {
    fetch(`/regProduct`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch (data.result) {
            case 0:
                alert('로그인 후 이용 가능합니다.')
                break
            case 1:
                location.href = '/sale/regProduct'
                break
        }
    })
}

//================= 카테고리 별 리스트 뿌리기 =======================
function TypeList(i_product_type,sortState){
	location.href = `/sale/typeList?i_product_type=`+i_product_type+"&sortState="+sortState
}
function TypeSubList(type_sub_title,sortState){
	location.href =`/sale/typeList?type_sub_title=`+type_sub_title+"&sortState="+sortState
}

function search(searchText,sortState){
	searchText= main_form_input.value
	console.log("searchText :"+searchText)
	location.href='/sale/typeList?searchText='+searchText+"&sortState="+sortState
	
}

///socket
$(document).ready(function(){
	
	
	connectWS();
	//connectSocketJs();
	connectStomp();
	
})

var socket= null;
var socket1 = null;
var isStomp = null;

function connectStomp(){
	var sock = new SockJS("/stompTest");
	var client = Stomp.over(sock);
	isStomp = true;
	socket = client;
	
	client.connect({}, function(){
		console.log("Connected stompTest!");
		
		client.send('/TTT',{},"msg: Haha~~");
		
		client.subscribe('/topic/message', function(event){
			console.log("!!!!!!!!!event>>",event)
		});
	});
}

function connectSocketJs(){
	var sock1 = new SockJS("/replyEcho");
	socket1 = sock1;
	sock1.onopen = function(){
		console.log('Info : connection opend.')
		sock1.send("hi~");
		
		sock1.onmessage = function(event){
			console.log("ReceivedMessage :",event.data+'\n')
			
		};
		sock1.onclose = function(event){
			console.log('Info: connection closed.')
		}
	}
	  
}
// pure web-socket
function connectWS(){
	var ws= new WebSocket("ws://localhost:8090/replyEcho?bno=?1234");
	socket1= ws;
	
	ws.onopen = function (){
		console.log('info: connection opend')
	};
	console.log("test1")
	ws.onmessage = function(event){
		console.log("ReceiveMessage:",event.data+'\n');
		let $socketAlert = document.querySelector('#socketAlert')
		$(socketAlert).html(event.data)
		$(socketAlert).css('display','block')
		setTimeout(function(){
			$(socketAlert).css('display','none')
		},5000)
		
	};
	
	console.log("test2")
	ws.onclose = function(event){
		console.log('Info:connection closed.');
	};
	
	ws.onerror = function(err){
		console.log('Error:',err);
	};
	
}

function send(){
	if(!isStomp && socket.readyState !== 1) {
		return;
	}
	
	let text = $('input#chktext').val()
	let text1 = "dfdfdf"
	if(isStomp){
		socket.send('/TTT',{},JSON.stringify({id:1234, msg: text}))
	}else{
		socket.send(text)
	}
	
}




