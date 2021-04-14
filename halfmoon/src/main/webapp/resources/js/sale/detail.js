wvar loginI_user = document.querySelector('#loginI_user').value
var productI_user = document.querySelector('#productI_user').value

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

var Index = 1;
similarSlides(Index);

function plusSlides1(n) {
	similarSlides(Index += n);
}

function currentSlide1(n) {
	similarSlides(Index = n);
}

function similarSlides(n) {
	var i;
	var slides1 = document.getElementsByClassName("similarSlide");
	var dots1 = document.getElementsByClassName("dot1");
	if (n > slides1.length) { Index = 1 }
	if (n < 1) { Index = slides1.length }
	for (i = 0; i < slides1.length; i++) {
		slides1[i].style.display = "none";
	}
	for (i = 0; i < dots1.length; i++) {
		dots1[i].className = dots1[i].className.replace(" active", "");
	}
	slides1[Index - 1].style.display = "block";
	dots1[Index - 1].className += " active";
}







var info_btn = document.querySelector('.product_info_btn')
var question_btn = document.querySelector('.product_question_btn')
var info = document.querySelector('.product_info_div')
var question = document.querySelector('.product_question_div')

info_btn.onclick = function() {
	info.style.display = 'block'
	question.style.display = 'none'
	question_btn.style.borderBottom = "1px solid gray"
	info_btn.style.borderBottom = "none"
}
question_btn.onclick = function() {
	info.style.display = 'none'
	question.style.display = 'block'
	info_btn.style.borderBottom = "1px solid gray"
	question_btn.style.borderBottom = "none"
}

//좋아요 기능
function toggleFavorite(i_product) {

	var fc = document.querySelector('#favoriteContainer');
	var toggle = fc.getAttribute('is_favorite'); //1: 좋아요, 0:안 좋아요
	var toggle = 1 - toggle;

	var param = {
		toggle: toggle,
		i_product: i_product
	}
	console.log(param)
	fetch(`/sale/favoriteAjax`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(res) {
			if (res.result == 1) {
				var iconClass = toggle == 1 ? 'fas' : 'far';
				fc.innerHTML = `<i class="${iconClass} fa-heart"></i>`;
				fc.setAttribute('is_favorite', toggle);
			}
		})
}





//댓글 기능
//댓글 등록
function clkCtnt(i_product, i_user) {
	var isSecret = document.querySelector('#isSecret')
	var isSecretVal;
	
	// 비밀글 체
	if (isSecret.checked) {
		console.log('checked')
		isSecretVal = 1
	} else {
		console.log('Unchecked')
		isSecretVal = 0
	}

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
	var param = {
		ctnt: ctntValue,
		i_product: i_product,
		i_user: i_user,
		isSecret: isSecretVal
	}
	fetch(`/sale/insCmt`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(res) {
			console.log(res.result)
			if (res.result == 1) {
				ctntElem.value = ''
				cmtObj.getCmtList()
			} else {
				alert('댓글 작성에 실패했습니다.')
			}
		})
}
//댓글 삭제
function delCmt(i_user, i_cmt) {
	var param = {
		i_user: i_user,
		i_cmt: i_cmt
	}

	fetch(`/sale/delCmt`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res => res.json())
		.then(function(res) {
			if (res.result == 1) {
				cmtObj.getCmtList()
			} else {
				alert('문의글 삭제에 실패했습니다.')
			}
		})
}


//대댓글 등록
function clkCmt_cmt(i_cmt, i_product) {
	var cmt_cmt_inputElem = document.querySelector('.cmt_cmt_input_'+i_cmt)
	var ctnt = cmt_cmt_inputElem.value
	param = {
		ctnt: ctnt,
		i_cmt: i_cmt,
		i_product: i_product
	}
	fetch(`/sale/insCmt_cmt`, {
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
function delCmtCmt(i_cmt_cmt, i_cmt){
	param ={
		i_cmt:i_cmt,
		i_cmt_cmt:i_cmt_cmt
	}
	console.log(param)
	fetch('/sale/delCmtCmt',{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res =>res.json())
	.then(function(res){
		console.log(res.result)
		if(res.result==1){
			getCmtCmtList(i_cmt)
			alert('답변이 삭제되었습니다.')	
		} else{
			alert('답변 삭제에 실패했습니다.')
		}
		
	})
	
}



var cmtObj = {
	i_product: 0,
	i_cmt: 0,

	getCmtList: function() {
		if (this.i_product === 0) {
			return
		}
		fetch(`/sale/cmtList?i_product=${this.i_product}`)
			.then(function(res) {
				return res.json()
			})
			.then((list) => {
				cmtListElem.innerHTML = ''
				this.proc(list)
				console.log(list)
			})
	},

	proc: function(list) {
		if (list.length == 0) {
			return
		}
		var div1 = document.createElement('div')
		for (var i = 0; i < list.length; i++) {
			var recode = this.createRecode(list[i])
			div1.append(recode)
		}
		cmtListElem.append(div1)

		let a = document.querySelectorAll('.cmt_cmt')
		for (var i = 0; i < a.length; i++) {
			a[i].style.display = "none"	
		}
		let b = document.querySelectorAll('.cmt_cmt_more')
		for (var i = 0; i < b.length; i++) {
			b[i].style.display = "none"
		}
		
		
	},
	createRecode: function(item) {
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
		if (productI_user == loginI_user || loginI_user == item.i_user) {
			cmt_cmt_show = `<button onclick="instoggle(${item.i_cmt})">답글달기</button>`
			cmt_cmt_show_btn = `<button class="cmt_cmt_btn" onclick="showtoggle(${item.i_cmt})">답변보기</button>`
			cmt_cmt_input = `<input type="text" class="cmt_cmt_input_${item.i_cmt} cmt_cmt_input">`
			cmt_cmt_input_btn = `<button class="cmt_cmt_input_btn" onclick="clkCmt_cmt(${item.i_cmt},${item.i_product})">등록</button>`
			cmt_ctnt = `<div class="cmt_ctnt">${item.ctnt}</div>`
			
			if (loginI_user == item.i_user) {
				delCmtBtn = `<button onclick="delCmt(${item.i_user},${item.i_cmt})">문의글 삭제</button>`
			}
			
		}else{
			if(item.isSecret ==1){
				var cmt_ctnt = `<div class="cmt_ctnt">비밀글 입니다.</div>`
			}
		}
		
		console.log(item.isSecret)


		var div2 = document.createElement('div')
		div2.innerHTML = `
			<div>
				<div class="cmt_main_div">
					<div class="cmt_main_img">
					${imgSrc}
					</div>
					<div>
						<div class="cmt_user_time">
							<div>${item.user_nm}</div>
							<div>1초전</div>
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
		return div2

	}

}
//=======================================대댓글 뿌리기 Start====================================================

//대댓글 뿌리기
function getCmtCmtList(i_cmt) {
	let cmtcmtListElem = document.querySelector('.cmt_cmt_ctnt_'+i_cmt)
	
	fetch(`/sale/cmtcmtList?i_cmt=${i_cmt}`)
		.then(function(res) {
			return res.json()
		})
		.then((list) => {
			cmtcmtListElem.innerHTML = ''
			cmtproc(list,i_cmt)
			console.log(list)
		})
}

function cmtproc(list,i_cmt) {
	let cmtcmtListElem = document.querySelector('.cmt_cmt_ctnt_'+i_cmt)
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
	if (productI_user == loginI_user) {
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
//=======================================대댓글 뿌리기end====================================================


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



var cmtListElem = document.querySelector('#cmtList')
if (cmtListElem) {
	var i_product = document.querySelector('#i_product').dataset.id
	cmtObj.i_product = i_product
	cmtObj.getCmtList()
}










