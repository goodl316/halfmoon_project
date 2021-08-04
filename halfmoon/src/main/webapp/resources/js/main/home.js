// 검색어 처리 용
var main_form_input = document.querySelector('.main-form-input')
var form_select_window = document.querySelector('.form-select-window')
var window_close = document.querySelector('.window_close')
var rSearch = document.querySelector('.window-a1')
var pSearch = document.querySelector('.window-a2')
var recent_keyword = document.querySelector('#recent_keyword')
var popular_keyword = document.querySelector('#popular_keyword')
var form_search = document.querySelector('#form_search')
var btn_delete_keyword = document.querySelector('#btn_delete_keyword')

// 메인메뉴 뿌리기 용
var menuList = document.querySelectorAll('.menuList')
var sub_div = document.querySelectorAll('.sub_div')


// 디테일 이동 (여기서는 아작스 안씀)
function moveDetail(i_product, i_user,i_product_type) {
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user + "&i_product_type="+i_product_type;

}


for(let i=0; i < menuList.length; i++) {
	menuList[i].onmouseover = function() {
		sub_div[i].style.display = 'block'
	}
	menuList[i].onmouseout = function() {
		sub_div[i].style.display = 'none'
	}
	
	sub_div[i].onmouseover = function() {
		sub_div[i].style.display = 'block'
	}
	sub_div[i].onmouseout = function() {
		sub_div[i].style.display = 'none'
	}
}



// ==================== 검색어 창 처리 start ======================
var window1 = false
// 검색어 창 삭제
main_form_input.onblur = onblurOut

function onblurOut() {
	if(window1 == true) {
		form_select_window.style.display = 'block'
	} else {
		form_select_window.style.display = 'none'
	}
}
form_select_window.onclick = function() {
	main_form_input.focus()
}
form_select_window.onmouseover = function() {
	window1 = true
}
form_select_window.onmouseout = function() {
	window1 = false
}

// 검색어 창 띄우기
main_form_input.onclick = function() {
	form_select_window.style.display = 'block'
}

// 검색어 창 닫기
window_close.onclick = function() {
	form_select_window.style.display = 'none'
}

// 검색어 색상 바뀌는 기능
rSearch.onclick = function() {
	rSearch.style.color = 'rgb(247, 47, 51)'
	rSearch.style.borderBottom = '2px solid rgb(247, 47, 51)'
	pSearch.style.color = 'black'
	pSearch.style.borderBottom = '2px solid rgb(217, 217, 217)'
	// switch
	recent_keyword.style.display = 'block'
	popular_keyword.style.display = 'none'
}
pSearch.onclick = function() {
	pSearch.style.color = 'rgb(247, 47, 51)'
	pSearch.style.borderBottom = '2px solid rgb(247, 47, 51)'
	rSearch.style.color = 'black'
	rSearch.style.borderBottom = '2px solid rgb(217, 217, 217)'
	// switch
	recent_keyword.style.display = 'none'
	popular_keyword.style.display = 'block'
}

// 검색어 storage 처리
if (!localStorage.search_keyword) {
	console.log('search_keyword is undefine, lets create.')
	let arr = new Array()
	localStorage.setItem("search_keyword", JSON.stringify(arr));
}

// onsubmit
form_search.onsubmit = function () {
	let arr = JSON.parse(localStorage.getItem("search_keyword"));
	// 스토리지 검색어 저장.
	arr.push(main_form_input.value)
	localStorage.setItem("search_keyword", JSON.stringify(arr));
}

// 저장된 스토리지 배열 뿌리기
// 저장된 스토리지 확인 용.
let saved_keyword = JSON.parse(localStorage.getItem("search_keyword"));
console.log('Saved : ' + saved_keyword)
for (let i = saved_keyword.length - 1; i >= 0; i--) {
	let window_div2 = document.createElement('div')
	window_div2.classList.add('window-div2')

	let div_a = document.createElement('div')
	div_a.innerText = saved_keyword[i]
	div_a.style.cursor = 'pointer'
	div_a.onclick = function () {
		// 검색어 이동 (나중에 수정)
		location.href = `?keyword=${saved_keyword[i]}`
	}

	let div_b = document.createElement('div')
	div_b.innerText = '×'
	div_b.style.cursor = 'pointer'
	div_b.classList.add('div_b')
	div_b.onclick = function () {
		console.log('delete : ' + i)
		// 해당 키워드 삭제
		saved_keyword.splice(i, 1)
		localStorage.setItem("search_keyword", JSON.stringify(saved_keyword));
		window_div2.style.display = 'none'
	}
	// append
	window_div2.append(div_a)
	window_div2.append(div_b)
	recent_keyword.append(window_div2)
}

// 저장된 스토리지 전체 삭제
btn_delete_keyword.onclick = function () {
	console.log('delete..')
	let arr = []
	localStorage.setItem("search_keyword", JSON.stringify(arr));
	recent_keyword.innerHTML = ''
}

// ==================== 검색어 창 처리 end ======================






















