function putname() {
  var user_nm_inmodal = document.querySelector('.user_nm_inmodal')
  user_nm_inmodal.innerHTML = document.querySelector('#findIdUserPh').value

}
function modal(id) {
                var zIndex = 9999;
                var modal = document.getElementById(id);

                // 모달 div 뒤에 희끄무레한 레이어
                var bg = document.createElement('div');
                bg.setStyle({
                    position: 'fixed',
                    zIndex: zIndex,
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    // 레이어 색갈은 여기서 바꾸면 됨
                    backgroundColor: 'rgba(0,0,0,0.4)'
                });
                document.body.append(bg);

                // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
                modal.querySelector('#modal_open_btn').addEventListener('click', function() {
                    bg.remove();
                    modal.style.display = 'none';
                });

                modal.setStyle({
                    position: 'fixed',
                    display: 'block',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

                    // 시꺼먼 레이어 보다 한칸 위에 보이기
                    zIndex: zIndex + 1,

                    // div center 정렬
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    msTransform: 'translate(-50%, -50%)',
                    webkitTransform: 'translate(-50%, -50%)'
                });
            }

document.getElementById('modal_open_btn').addEventListener('click', function() {
                // 모달창 띄우기
                modal('modal');
            });


  var phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
  var ph_Elem = document.querySelector('#findIdUserPh')
  function ph_pattern_pw() {
      console.log(ph_Elem.value)
			if (!phonePattern.test(ph_Elem.value)) {
				ph_msg.innerHTML = "-를 제외한 숫자만 입력해주십시오."
                console.log("dd")
				
			} else {
				ph_msg.innerHTML = ""
                console.log(joinPossible)
			}
		}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  //tabcontent[0].style.display = "block";
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  function findIdBtn() {
      var user_id = document.querySelector('#findIdUserNm').value
      var user_ph = document.querySelector('#findIdUserPh').value
      console.log('btn');

	ajax()
	
	function ajax () {
		fetch('/user/findPwAuth', { 
			method: 'post',
			headers: {
            	'Content-Type': 'application/json'
			},
			body: JSON.stringify(param)
		}).then(res => res.json())
		.then(myJson => {
			proc(myJson)
		})
		
	}
  }

}
