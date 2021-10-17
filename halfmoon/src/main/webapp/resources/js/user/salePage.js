var loginI_user = document.querySelector('.i_user').value
var i_store = document.querySelector('.i_store').value
var selectMenu = document.querySelector('#selectMenu')
var storeI_user = document.querySelector('.storeI_user').value
var product_btn = document.querySelector('.product_btn')


console.log('menu : ' + selectMenu.value)

var info_div1 = document.querySelector('.info_div1')
info_div1.style.display = 'block'
var info_div2 = document.querySelector('.info_div2')
info_div2.style.display = 'none'
var info_div3 = document.querySelector('.info_div3')
info_div3.style.display = 'none'
var info_div4 = document.querySelector('.info_div4')
info_div4.style.display = 'none'
var info_div5 = document.querySelector('.info_div5')
info_div5.style.display = 'none'

var menuBtn = document.querySelectorAll('.menuBtn')

// 첫 페이지 메뉴 조정
showMenu(selectMenu.value)

function showMenu(select) {
	console.log('select : ' + select)
	switch (select) {
		case 1:
			for (let i = 0; i < menuBtn.length; i++) {
				if (i == 0) {

				} else {

				}
			}
			info_div1.style.display = 'block'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 2:
			info_div1.style.display = 'none'
			info_div2.style.display = 'block'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 3:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'block'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 4:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'block'
			info_div5.style.display = 'none'
			break
		case 5:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'block'
			break
	}
}


function selectMenu(select) {
	console.log("aaaaaaa")
	switch (select) {
		case 1:
			info_div1.style.display = 'block'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 2:
			info_div1.style.display = 'none'
			info_div2.style.display = 'block'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 3:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'block'
			info_div4.style.display = 'none'
			info_div5.style.display = 'none'
			break
		case 4:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'block'
			info_div5.style.display = 'none'
			break
		case 5:
			info_div1.style.display = 'none'
			info_div2.style.display = 'none'
			info_div3.style.display = 'none'
			info_div4.style.display = 'none'
			info_div5.style.display = 'block'
			break
	}
}


function clkCtnt(i_store, i_user) {
	var ctntElem = document.querySelector('.product_ctnt_input')
	var ctntValue = ctntElem.value

	if (loginI_user == '') {
		alert("로그인후 등록하여 주세요")
		location.href = "/login"
		return
	}
	if (ctntValue == '') {
		alert("내용을 입력하여 주세요")
		return
	}

	var params = {
		ctnt: ctntValue,
		i_user: i_user,
		i_store: i_store
	}
	console.log(params)
	fetch('/store/insCmt', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	}).then(res => res.json()).
		then(function(res) {
			if (res.result == 1) {
				ctntElem.value = ''
				getCmtList()
			} else {
				alert('댓글 작성에 실패했습니다.')
			}

		})
}

function delCmt(i_user, i_cmt) {
	var params = {
		i_user: i_user,
		i_cmt: i_cmt
	}

	fetch(`/store/delCmt`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	}).then(res => res.json())
		.then(function(res) {
			if (res.result == 1) {
				getCmtList()
			} else {
				alert("문의글 삭제에 실패했습니다.")
			}
		})

}

function getCmtList() {
	if (this.i_store == 0) {
		return
	}

	fetch(`/store/cmtList?i_store=${this.i_store}`)
		.then(function(res) {
			return res.json()
		}).then(function(list){
			cmtListElem.innerHTML = ''
			proc(list)
			cmt_count(list)
		})
}
function proc(list) {
	if (list.length == 0) {
		return
	}
	var div = document.createElement('div')
	for (var i = 0; i < list.length; i++) {
		var recode = createRecode(list[i])
		div.append(recode)
	}
	cmtListElem.append(div)
}

function cmt_count(list) {
	var cmt_count = document.querySelector('.product_question_btn.menuBtn')
	var cmt_count2 = document.querySelector('.product_question')
	cmt_count.innerHTML = ''
	if (list.length == 0) {
		cmt_count.innerHTML = `
			상품문의 <span>0</span>
		`
		return
	}

	let count = 0;
	for (let i = 0; i < list.length; i++) {
		count++
	}

	cmt_count.innerHTML =
		`
				상점문의 <span>${count}</span>
	`
	cmt_count2.innerHTML =
		`
				상점문의 <span class="count">${count}</span>
	`
}

function createRecode(item) {
	var cmt_ctnt = `<div class="cmt_ctnt">${item.ctnt}</div>`
	var imgSrc = `<img src="/res/img/1234.png">`
	var cmt_cmt_show = ''
	var cmt_cmt_show_btn = ''
	var delCmtBtn = ''
	var cmt_cmt_input = ''
	var cmt_cmt_input_btn = ''
	if (item.profile_img != null) {
		imgSrc = `<img src="/res/img/user/${item.i_user}/${item.profile_img}">`
	}
	if (storeI_user == loginI_user || loginI_user == item.i_user) {
		cmt_cmt_show = `<button onclick="instoggle(${item.i_cmt})">답글달기</button>`
		cmt_cmt_show_btn = `<button class="cmt_cmt_btn" onclick="showtoggle(${item.i_cmt})">답변보기</button>`
		cmt_cmt_input = `<input type="text" class="cmt_cmt_input_${item.i_cmt} cmt_cmt_input">`
		cmt_cmt_input_btn = `<button class="cmt_cmt_input_btn" onclick="clkCmt_cmt(${item.i_cmt},${item.i_store})">등록</button>`
		cmt_ctnt = `<div class="cmt_ctnt">${item.ctnt}</div>`

		if (loginI_user == item.i_user) {
			delCmtBtn = `<button onclick="delCmt(${item.i_user},${item.i_cmt})">문의글 삭제</button>`
		}

	}


	var div = document.createElement('div')
	div.innerHTML = `
		<div>
				<div class="cmt_main_div">
					<div class="cmt_main_img">
					${imgSrc}
					</div>
					<div>
						<div class="cmt_user_time">
							<div>${item.user_nm}</div>
							<div>${item.show_time}</div>
						</div>
						${cmt_ctnt}
						<div class="input_btn">
							<div class="cmt_btn">
								<div class="cmt_cmt_div">
									${cmt_cmt_show}
								</div>
								<div class ="cmt_cmt_div2">
									${cmt_cmt_show_btn}
								<div>
								<div>
										${delCmtBtn}
								</div>
							</div>
							
							
							
						</div>
					</div>
					<div class="cmt_cmt_${item.i_cmt} cmt_cmt" value="${item.i_cmt}">
					<input type="hidden" id="pI_cmt" value=${item.i_cmt}>
					<span id="i_cmt" data-id="${item.i_cmt}"></span>
								${cmt_cmt_input}
								${cmt_cmt_input_btn}
					</div>
					<div class="cmt_cmt_more_${item.i_cmt} cmt_cmt_more" value="${item.i_cmt}">
								<div class="cmt_cmt_ctnt cmt_cmt_ctnt_${item.i_cmt}"></div>
					</div>
				<div>
			</div>
			`
	return div
}
var cmtListElem = document.querySelector('#cmtList')
if (cmtListElem) {
	getCmtList()
}


function isfollow(target_user, i_user) {

	var fc = document.querySelector('#followContainer');
	var toggle = fc.getAttribute('is_follow');
	var toggle = 1 - toggle
	console.log("toggle:" + toggle)
	if (loginI_user == '') {
		alert('로그인 후 이용해 주세요.')
		return
	}

	params = {
		i_user: i_user,
		target_user: target_user,
		is_follow: toggle
	}
	console.log(params)
	fetch(`/store/follow`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	}).then(function(res) {
		return res.json()
	}).then(function(res) {
		if (res.result == 1) {
			//	location.reload()
			var iconClass = toggle == 1 ? 'follow.white' : 'following';
			fc.innerHTML = `<img src="/res/img/${iconClass}.png"> <span> 팔로잉</span>`
			fc.setAttribute('is_follow', toggle);
		} else {
			alert('팔로우에 실패하였습니다.')
		}
	})
}
$(function() {
      $('.product_ctnt_input').keyup(function (e){
          var content = $(this).val();
          $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
          $('#counter').html(content.length + '/100');
      });
      $('.product_ctnt_input').keyup();
});




