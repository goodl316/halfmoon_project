// 주소 id 참조
var postcode = document.querySelector('#postcode')	// 우편번호
var roadAddr = document.querySelector('#roadAddress') // 도로명 주소
var jibunAddr = document.querySelector('#jibunAddress') // 지번 주소
var detailAddr = document.querySelector('#detailAddress') // 상세 주소
var extraAddr = document.querySelector('#extraAddress') // 참고 항목
var inputImgElem = document.querySelector('#inputImg')

function uploadImg(){
	if(inputImgElem.files.length==0){
		alert("사진을 선택해 주세요")
		return
	}
	imgAjax()
}
function clkPw(i_user){
	location.href=`/user/chPw?i_user=${i_user}`
}

function chPw(){
	var chPwbtnElem = document.querySelector('#chPwbtn')
	
	chPwbtnElem.onclick=function(){
		pwAjax()
	}
}

function chAddr(){
	
}

function imgAjax(){
	var formData = new FormData()
	formData.append('imgs',inputImgElem.files)

	fetch('user/profileUpload',{
		method: 'post',
		body: formData
	})
}

function pwAjax(){
	var userPwElem = document.querySelector('#userPw')
	var chkUserPwElem = document.querySelector('#chkUserPw')
	
	if(!userPwElem.value==chkUserPwElem.value){
		alter("변경할 비밀번호를 확인해 주세요")
		return
	}
	
	var param = {
		user_pw: userPwElem.value
	}
	
	fetch('/user/updPw', { 
			method: 'post',
			headers: {
            	'Content-Type': 'application/json'
			},
			body: JSON.stringify(param)
		}).then(res => res.json())
		.then(myJson => {
			proc(myJson)
		})
		
		function proc (res) {
		switch(res.result) {
			case 0:
				alert('비밀번호 변경에 실패하였습니다.')
			return
			case 1:
				alert('비밀번호를 변경하였습니다.')
				location.href='/user/login'
			return
		}
	}

	
}


function addrAjax(){
	
}
