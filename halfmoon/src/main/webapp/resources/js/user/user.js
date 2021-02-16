var joinCont = document.querySelector('#joinCont')

var id_email = joinCont.id_email
var user_pw = joinCont.user_pw
var nm = joinCont.nm
var gender =joinCont.gender
var ph = joinCont.ph
var user_address =  joinCont.user_address
var joinBtn = document.querySelector('#joinBtn')

//정규화 하기(아이디 ,이름, 정규화 )	
joinBtn.onclik = function () {
	
	
	ajax()	
	
	
	
}


	function ajax () {
		var param = {
			id_email,
			user_pw,
			nm,
			user_address,
			gender,
			ph
			
		}
		
		fetch('/user/join', {
			method: 'put',
			headers: {
            	'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		})
}