var joinCont = document.querySelector('#joinCont')

var id_email = joinCont.id_email
var user_pw = joinCont.user_pw
var user_nm = joinCont.user_nm
var gender =joinCont.gender
var ph = joinCont.ph
var user_address =  joinCont.user_address
var joinBtn = document.querySelector('#joinBtn')

//정규화 하기(아이디 ,이름, 정규화 )	
joinBtn.onclick = function () {
	ajax()	
	
}

	function ajax () {
		console.log("dddd")
		id_email = id_email.value
		user_pw = user_pw.value
		user_nm = user_nm.value
		gender = gender.value
		ph = ph.value
		user_address = user_address.value
		
		var param = {
			id_email: id_email,
			user_pw: user_pw,
			user_nm: user_nm,
			user_address: user_address,
			ph: ph
			
		}
		console.log(param)
		fetch(`/joinProc`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			if(data.result === 1){
				alert("회원가입에 성공했습니다.")
				location.href=`/login`
			}else{
				alert("회원가입에 실패했습니다.")
			}
		})
}












