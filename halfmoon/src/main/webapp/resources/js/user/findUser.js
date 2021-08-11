var user_nm = document.querySelector('.UserNm')
var user_ph = document.querySelector('.UserPh')
var id_email = document.querySelector('.findPw_input')
var user_nm2 =document.querySelector('.find_user_nm')
var id_email2 = document.querySelector('.findPw_email')
var code = document.querySelector('.check_code')
var user_Pw = document.querySelector('#userPw')
var chk_Pw = document.querySelector('#chkUserPw')

function nextfindId(state){
	
	var params = {
		user_nm : user_nm.value,
		ph: user_ph.value,
		state:state
	}
	
	fetch(`/user/my/findId`,{
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(params)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result){
			case 1:
				location.href = `/user/my/findUser?state=`+state
				break;
			case 2:
				alert('이름이나 전화번호와 일치하는 정보가 없습니다.')
				break;
			case 3:
				alert('이름이나 전화번호와 일치하는 정보가 없습니다.')
				break;
		}
	})
	
}

function loginBtn(){
	location.href=`/login`
}

function nextPw(state){
	var params = {
		id_email : id_email.value,
		state : state
	}
	
	fetch(`/user/my/findPw`,{
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(params)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result){
			case 1:
				location.href = `/user/my/findUser?state=`+state
				break;
			case 2:
				alert('일치하는 아이디가 없습니다.')
				break;
			
		}
	})
}

function sendCode(){
	var params = {
		id_email : id_email2.value,
		user_nm : user_nm2.value
	}
	console.log(params)
	fetch(`/user/my/sendCode`,{
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(params)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result){
			case 1:
				alert("인증 메일을 발송했습니다.")
				break;
			case 2:
				alert('일치하는 아이디가 없습니다.')
				break;
			
		}
	})
}

function chkCode(state){
	
	var params = {
		id_email : id_email2.value,
		user_nm : user_nm2.value,
		code:code.value
	}
	console.log(params)
	fetch(`/user/my/chkCode`,{
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(params)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result){
			case 1:
				alert("인증코드가 확인되었습니다.")
				location.href=`/user/my/findUser?state=`+state+'&code='+params.code
				break;
			case 2:
				alert('인증코드가 일치하지 않습니다..')
				break;
			case 3:
				alert('아이디와 이름을 확인해주세요.')
				break;
			
		}
	})
}
function chPw(){
	if(userPw.value != chk_Pw.value){
		return alert('변경할 비밀번호가 일치하지 않습니다.')
	}
	updpwAjax()
}

function updpwAjax(code){
	var params={
		user_pw:user_Pw.value,
		state : 4,
		code: code
	}
	
	fetch(`/user/my/chPw`,{
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(params)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result){
			case 1:
				alert("비밀번호가 변경되었습니다.")
				location.href=`/login`
				break;
			case 2:
				alert('비밀번호 변경에 실패하였습니다.')
				break;
			
		}
	})
	
	
	
}