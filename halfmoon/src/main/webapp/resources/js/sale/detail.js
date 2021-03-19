

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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
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
  if (n > slides1.length) {Index = 1}    
  if (n < 1) {Index = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[Index-1].style.display = "block";  
  dots1[Index-1].className += " active";
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

	var param ={
		toggle: toggle,
		i_product: i_product
	}
	console.log(param)
	fetch(`/sale/favoriteAjax`,{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res=>res.json())
	.then(function(res){
		if(res.result == 1){
			var iconClass = toggle == 1 ? 'fas' : 'far';
			fc.innerHTML = `<i class="${iconClass} fa-heart"></i>`;
			fc.setAttribute('is_favorite', toggle);
		}
	})
}
//답글 창 toggle
var i_cmt = document.querySelectorAll('.i_cmt')
var cmtElem = document.querySelectorAll('.cmt_cmt')
var cmtcmtDivElem = document.querySelectorAll('.cmt_cmt_div')
for(let i=0; i<cmtElem.length; i++){
	console.log("aaa")
	cmtElem[i].style.display = "none"
	cmtcmtDivElem[i].onclick = function(){
		console.log(cmtElem[i])
		if (cmtElem[i].style.display == 'none') {
			cmtElem[i].style.display = 'block'
		} else {
			cmtElem[i].style.display = 'none'
			
		}
		
		
	}
	
}
//답변 더보기
var i_cmt = document.querySelectorAll('.i_cmt')
var cmt_more_Elem = document.querySelectorAll('.cmt_cmt_more')
var cmt_cmt_btn = document.querySelectorAll('.cmt_cmt_btn')
for(let i=0; i<cmt_more_Elem.length; i++){
	console.log("aaa")
	cmt_more_Elem[i].style.display = "none"
	cmt_cmt_btn[i].onclick = function(){
		console.log(cmtElem[i])
		if (cmt_more_Elem[i].style.display == 'none') {
			cmt_more_Elem[i].style.display = 'block'
		} else {
			cmt_more_Elem[i].style.display = 'none'
			
		}
	}
}
	


//댓글 기능
//댓글 등록
function clkCtnt(i_product,i_user){
	var ctntElem = document.querySelector('.product_ctnt_input')
	var ctntValue = ctntElem.value
	
	var param = {
		ctnt: ctntValue,
		i_product: i_product,
		i_user: i_user
	}
	fetch(`/sale/insCmt`,{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res=>res.json())
	.then(function(res){
		console.log(res.result)
		if(res.result==1){
			alert('문의글이 작성되었습니다.')
		}else{
			alert('댓글 작성에 실패했습니다.')
		}
	})
}
//댓글 삭제
function delCmt(i_user,i_cmt){
	var param={
		i_user: i_user,
		i_cmt: i_cmt
	}
	
	fetch(`/sale/delCmt`,{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res=>res.json())
	.then(function(res){
		console.log(res.result)
		if(res.result==1){
			alert('문의글이 삭제되었습니다.')
		}else{
			alert('문의글 삭제에 실패했습니다.')
		}
	})
}



function clkCmt_cmt(i_cmt){
	var cmt_cmt_inputElem = document.querySelector('.cmt_cmt_input')
	var ctnt =  cmt_cmt_inputElem.value
	param ={
		ctnt: ctnt,
		i_cmt: i_cmt
	}
	console.log(param)
	fetch(`/sale/insCmt_cmt`,{
		method:'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	}).then(res=>res.json())
	.then(function(res){
		console.log(res.result)
		if(res.result==1){
			alert('답글이 작성되었습니다.')
		}else{
			alert('답글 작성에 실패했습니다.')
		}
	})
	
}

