var loginI_user = document.querySelector('.i_user').value
var i_store = document.querySelector('.i_store').value
var selectMenu = document.querySelector('#selectMenu')
var storeI_user = document.querySelector('.storeI_user').value
var product_btn = document.querySelector('.product_btn')
var sub_nav = document.querySelector('#sub_nav')

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
showCate()
function showCate() {
	var sub_nav = document.querySelector('#sub_nav')
	var list_div = document.querySelector('.List')
	list_div.style.display = 'none';
	sub_nav.style.display = "block"
	if (sub_nav) {
		console.log("asd")
	}
	if (list_div) {
		console.log("dfdfdf")
	}
}

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

//cmt 등록
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
//댓글 리스트 가져오기
function getCmtList() {
	if (this.i_store == 0) {
		return
	}

	fetch(`/store/cmtList?i_store=${this.i_store}`)
		.then(function(res) {
			return res.json()
		}).then(function(list) {
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

	let a = document.querySelectorAll('.cmt_cmt')
	for (var i = 0; i < a.length; i++) {
		a[i].style.display = "none"
	}
	let b = document.querySelectorAll('.cmt_cmt_more')
	for (var i = 0; i < b.length; i++) {
		b[i].style.display = "none"
	}
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
			var iconClass = toggle == 0 ? 'follow.white' : 'following';
			fc.innerHTML = `<img src="/res/img/${iconClass}.png"> <span> 팔로잉</span>`
			fc.setAttribute('is_follow', toggle);
		} else {
			alert('팔로우에 실패하였습니다.')
		}
	})
}
$(function() {
	$('.product_ctnt_input').keyup(function(e) {
		var content = $(this).val();
		$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
		$('#counter').html(content.length + '/100');
	});
	$('.product_ctnt_input').keyup();
});






function instoggle(i_cmt) {
	let cmt_cmtIndex2 = document.querySelector('.cmt_cmt_' + i_cmt)
	let cmt_cmtIndex3 = document.querySelector('.cmt_cmt_more_' + i_cmt)
	if (cmt_cmtIndex2.style.display == 'none') {
		cmt_cmtIndex2.style.display = 'block'
		cmt_cmtIndex3.style.display = 'none'
	} else {
		cmt_cmtIndex2.style.display = 'none'
	}
	if (cmt_cmtIndex2.style.display == 'block' && cmt_cmtIndex3.style.display == 'none') {
		getCmtCmtList(i_cmt);
	}

}

function showtoggle(i_cmt) {
	let cmt_cmtIndex2 = document.querySelector('.cmt_cmt_' + i_cmt)
	let cmt_cmtIndex3 = document.querySelector('.cmt_cmt_more_' + i_cmt)
	if (cmt_cmtIndex3.style.display == 'none') {
		cmt_cmtIndex3.style.display = 'block'
		cmt_cmtIndex2.style.display = 'none'
	} else {
		cmt_cmtIndex3.style.display = 'none'
	}
	if (cmt_cmtIndex3.style.display == 'block' && cmt_cmtIndex2.style.display == 'none') {
		getCmtCmtList(i_cmt);
	}
}


//=======================================대댓글 뿌리기 Start====================================================

//대댓글 뿌리기
function getCmtCmtList(i_cmt) {
	let cmtcmtListElem = document.querySelector('.cmt_cmt_ctnt_' + i_cmt)

	fetch(`/store/cmtcmtList?i_cmt=${i_cmt}`)
		.then(function(res) {
			return res.json()
		})
		.then((list) => {
			cmtcmtListElem.innerHTML = ''
			cmtproc(list, i_cmt)
			console.log(list)
		})
}

function cmtproc(list, i_cmt) {
	let cmtcmtListElem = document.querySelector('.cmt_cmt_ctnt_' + i_cmt)
	if (list.length == 0) {
		console.log("222222")
		return
	}
	var div = document.createElement('div')
	for (var i = 0; i < list.length; i++) {
		var recode = createRecode1(list[i])
		div.append(recode)
	}
	cmtcmtListElem.append(div)
}

function createRecode1(item) {
	var cmt_cmt_del_btn = ''
	if (storeI_user == loginI_user) {
		cmt_cmt_del_btn = `<button class="cmt_cmt_del_btn" onclick="delCmtCmt(${item.i_cmt_cmt},${item.i_cmt})">답변 삭제</button>`
	}
	var imgSrc = `<img class="cmt_cmt_main_arrow" src="/res/img/arrow.png">`
	var div1 = document.createElement('div')
	div1.innerHTML = `
	<div class="cmt_cmt_main">
		<div>${imgSrc}</div>
		<div class="cmt_cmt_main_ctnt">${item.ctnt}</div>
		${cmt_cmt_del_btn}
	</div>
	`
	return div1
}

//대댓글 등록
function clkCmt_cmt(i_cmt, i_store) {
	var cmt_cmt_inputElem = document.querySelector('.cmt_cmt_input_' + i_cmt)
	var ctnt = cmt_cmt_inputElem.value
	param = {
		ctnt: ctnt,
		i_cmt: i_cmt,
		i_store: i_store
	}
	fetch(`/store/insCmtCmt`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(res) {
			if (res.result == 1) {
				cmt_cmt_inputElem.value = ''
				alert('답글이 작성되었습니다.')
			} else {
				alert('답글 작성에 실패했습니다.')
			}
		})
}

//대댓글 삭제
function delCmtCmt(i_cmt_cmt, i_cmt) {
	param = {
		i_cmt: i_cmt,
		i_cmt_cmt: i_cmt_cmt
	}
	console.log(param)
	fetch('/store/delCmtCmt', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(res) {
			console.log(res.result)
			if (res.result == 1) {
				getCmtCmtList(i_cmt)
				alert('답변이 삭제되었습니다.')
			} else {
				alert('답변 삭제에 실패했습니다.')
			}

		})

}
//==================팔로우 리스트 start ==============================

function getFollowList() {

	fetch(`/store/followList?i_user=${this.i_store}`)
		.then(function(res) {
			return res.json()
		}).then(function(list) {
			console.log("aaaa")
			console.log(list)
			followList.innerHTML = ''

			followProc(list)
			getp_img()
		})

}

function followProc(list) {
	console.log("listchk", list.length)
	if (list.length == 0) {
		return
	}
	var div = document.createElement('div')
	for (var i = 0; i < list.length; i++) {
		var recode = createRecode2(list[i])
		div.append(recode)
	}
	followList.append(div)


}

function createRecode2(item) {
	var div = document.createElement('div')
	div.innerHTML = `
		<div>
			<div>
				<div class="following_user_cont">

					<div class="following_user_left">

						<a href=""><img alt="" src="/res/img/basic_profile.jpg"></a>
						<div>
							<a class="following_user_nm" href="">${item.user_nm}</a>
						</div>
						<div class="following_user_pf">
							<a href="">상품${item.saleCount}</a> <a href="">팔로워${item.countFollow}</a>
						</div>
						<div>
							<button class="following_user_btn" onclick="">
								<img alt="" src="/res/img/follow.png"> 팔로우
							</button>
						</div>

					</div>
					<div class="following_user_right following_user_right_${item.target_user}">
					<input type="hidden" value="${item.target_user}" class="follow_target_user">
					</div>
				</div>
			</div>
		</div>
	`
	return div
}

var followList = document.querySelector('.followList')
if (followList) {
	console.log("is a")
	getFollowList()
}

//==================팔로우 리스트 end ==============================

//==================팔로우 상품 사진 start ==============================
function getp_img() {
	let following_user_right = document.querySelectorAll('.following_user_right')
	if (following_user_right) {
		console.log("is true")
		console.log(following_user_right[0])
	} else (
		console.log("is not true")
	)
	fetch(`/store/p_imgList?i_user=${this.i_store}`)
		.then(function(res) {
			return res.json()
		}).then(function(list) {
			console.log("bbbbbb")
			console.log(list)
			following_user_right.innerHTML = ''
			p_imgProc(list)
			console.log("list3")
		})

}

function p_imgProc(list) {
	let following_user_right = document.querySelector('.following_user_right')
	console.log("chkkk1", list[0])
	console.log("chkkk2", list[1])
	console.log("chkkk3", list[2])

	if (list.length == 0) {
		return
	}


	var div = document.createElement('div')
	for (var i = 0; i < list.length; i++) {
		let following_user_right = document.querySelectorAll('.following_user_right')
		var recode = createRecode3(list[i])
		div.append(recode)

	}
	for (var i = 0; i < list.length; i++) {
		let following_user_right = document.querySelectorAll('.following_user_right')
		let following_user_right1 = document.querySelector('.following_user_right_' + list[i].target_user)
		var recode = createRecode3(list[i])
		console.log("asdf", i)
		console.log("asdff", list[i].target_user)
		var div = document.createElement('div')

		div.append(recode)
		following_user_right1.append(div)

	}



}

function createRecode3(item) {
	var target = document.querySelectorAll('.follow_target_user')

	var a = document.createElement('a')
	console.log("asdfasdfasdfasd", target.length)
	for (var i = 0; i < target.length; i++) {
		console.log("ssssss", i)
		var target = document.querySelectorAll('.follow_target_user')
		var target_value = target[i].value
		console.log(target_value + "|" + item.target_user)

		if (target[i].value == item.target_user) {
			a.innerHTML =
				`
		<input type="hidden" value="${item.target_user}" class="target1 target1_${item.target_user}">
			 <img alt="" class="right_img" src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
			
		`
		}

	}


	return a


}

//==================팔로우 상품 사진 end ==============================


