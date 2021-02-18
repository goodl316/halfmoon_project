var joinBtn = document.querySelector('#joinBtn')
		var id_email_Elem = document.querySelector('#id_email')
		var user_pw_Elem = document.querySelector('#user_pw')
		var user_pw_chk_Elem = document.querySelector('#user_pw_chk')
		var user_nm_Elem = document.querySelector('#user_nm')
		var gender_Elem = document.querySelector('#gender')
		var ph_Elem = document.querySelector('#ph')
		var user_address_Elem = document.querySelector('#user_address')

        var joinPossible = [];
		
		// 정규식
        //email 다시해야함.
		var pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
		var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		var phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;

		// 패턴 비교 후 메세지 띄워주기(msg)
        function chk_pattern_e() {
            if(!emailPattern.test(id_email_Elem.value)) {
                joinPossible.pop('1');
                id_email_msg.innerHTML = "이메일형식을 다시 확인해주세요.(@포함)"
                id_email_msg.style.color ="red"
            }else{
                id_email_msg.innerHTML =""
                joinPossible.push('1');
                console.log(joinPossible)
            }
        }
		function chk_pattern_pw() {
			if (!pwPattern.test(user_pw_Elem.value)) {
                joinPossible.pop('1');
				pw_msg.innerHTML = "영문, 특수문자, 숫자 포함 8-16자리"
				pw_msg.style.color = "red"
			} else {
				pw_msg.innerHTML = ""
                joinPossible.push('1');
                console.log(joinPossible)
			}
		}
 
		function chk_pw() {
			if (user_pw_Elem.value !== user_pw_chk_Elem.value) {
                joinPossible.pop('1');
				pw_chk_msg.innerHTML = "비밀번호가 다릅니다."
				pw_chk_msg.style.color = "red"
			} else {
				pw_chk_msg.innerHTML = ""
                joinPossible.push('1');
                console.log(joinPossible)
			}
		}

        function ph_pattern_pw() {
			if (!phonePattern.test(ph_Elem.value)) {
                joinPossible.pop('1');
				ph_msg.innerHTML = "-를 제외한 숫자만 입력해주십시오."
				ph_msg.style.color = "red"
			} else {
				ph_msg.innerHTML = ""
                joinPossible.push('1');
                console.log(joinPossible)
			}
		}



		//join버튼 클릭시 메세지 띄우고, 모든 칸이 알맞게 입력됐을시 값 받아주기.
		joinBtn.onclick = function () {
            console.log(joinPossible)
         switch(joinPossible.length) {
             case 0:
                alert('모든 입력칸을 작성해주세요.');
                break;
             case 4:
                 alert('가입에 성공하였습니다.');
                 joinAjax()
                 break;
            default:
                alert('모든 칸을 조건에 맞게 작성해주세요.');
                break;
            }
    

		function joinAjax() {
			id_email = id_email_Elem.value
			user_pw = user_pw_Elem.value
			user_pw_chk = user_pw_chk_Elem.value
			user_nm = user_nm_Elem.value
			gender = gender_Elem.value
			ph = ph_Elem.value
			user_address = user_address_Elem.value


			var param = {
				id_email: id_email,
				user_pw: user_pw,
				user_pw_chk:user_pw_chk,
				user_nm: user_nm,
                gender: gender,
				user_address: user_address,
				ph: ph
			}
				console.log(param)
		}
    }
