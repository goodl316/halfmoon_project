var btn_login = document.querySelector('#btn_login')
var btn_join = document.querySelector('#btn_join')
var main_form_input = document.querySelector('.main-form-input')
var form_select_window = document.querySelector('.form-select-window')
var window_close = document.querySelector('.window_close')
var rSearch = document.querySelector('.window-a1')
var pSearch = document.querySelector('.window-a2')
var subMenuList1 = document.querySelector('.subMenuList1')
var subMenuList2 = document.querySelector('.subMenuList2')
var subMenuList3 = document.querySelector('.subMenuList3')
var subMenuList4 = document.querySelector('.subMenuList4')
var subMenuList5 = document.querySelector('.subMenuList5')
var subMenuList6 = document.querySelector('.subMenuList6')
var subMenuList7 = document.querySelector('.subMenuList7')
var subMenuList8 = document.querySelector('.subMenuList8')
var subMenuList9 = document.querySelector('.subMenuList9')
var subMenuList10 = document.querySelector('.subMenuList10')
var menuListLi1 = document.querySelector('#menuListLi1')
var menuListLi2 = document.querySelector('#menuListLi2')
var menuListLi3 = document.querySelector('#menuListLi3')
var menuListLi4 = document.querySelector('#menuListLi4')
var menuListLi5 = document.querySelector('#menuListLi5')
var menuListLi6 = document.querySelector('#menuListLi6')
var menuListLi7 = document.querySelector('#menuListLi7')
var menuListLi8 = document.querySelector('#menuListLi8')
var menuListLi9 = document.querySelector('#menuListLi9')
var menuListLi10 = document.querySelector('#menuListLi10')


/*
var arr1 = ['menuListLi1', 'menuListLi2', 'menuListLi3', 'menuListLi4', 'menuListLi5',
	'menuListLi6','menuListLi7','menuListLi8','menuListLi9','menuListLi10']

var arr2 = ['subMenuList1','subMenuList2','subMenuList3','subMenuList4','subMenuList5',
	'subMenuList6','subMenuList7','subMenuList8','subMenuList9','subMenuList10']

for(var i=0; i<=10; i++) {
	arr1[i].onmouseover = function() {
	    arr2[i].style.display = 'block'
    }
}
*/

var isover = false

//위와 같은 코드 수정해야함
menuListLi1.onmouseover = function() {
	subMenuList1.style.display = 'block'
	isover = true
}
subMenuList1.onmouseout = function() {
	subMenuList1.style.display = 'none'
}

menuListLi2.onmouseover = function() {
	subMenuList2.style.display = 'block'
}
menuListLi2.onmouseout = function() {
	subMenuList2.style.display = 'none'
}
menuListLi3.onmouseover = function() {
	subMenuList3.style.display = 'block'
}
menuListLi3.onmouseout = function() {
	subMenuList3.style.display = 'none'
}
menuListLi4.onmouseover = function() {
	subMenuList4.style.display = 'block'
}
menuListLi4.onmouseout = function() {
	subMenuList4.style.display = 'none'
}
menuListLi5.onmouseover = function() {
	subMenuList5.style.display = 'block'
}
menuListLi5.onmouseout = function() {
	subMenuList5.style.display = 'none'
}
menuListLi6.onmouseover = function() {
	subMenuList6.style.display = 'block'
}
menuListLi6.onmouseout = function() {
	subMenuList6.style.display = 'none'
}
menuListLi7.onmouseover = function() {
	subMenuList7.style.display = 'block'
}
menuListLi7.onmouseout = function() {
	subMenuList7.style.display = 'none'
}
menuListLi8.onmouseover = function() {
	subMenuList8.style.display = 'block'
}
menuListLi8.onmouseout = function() {
	subMenuList8.style.display = 'none'
}
menuListLi9.onmouseover = function() {
	subMenuList9.style.display = 'block'
}
menuListLi9.onmouseout = function() {
	subMenuList9.style.display = 'none'
}
menuListLi10.onmouseover = function() {
	subMenuList10.style.display = 'block'
}
menuListLi10.onmouseout = function() {
	subMenuList10.style.display = 'none'
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
}

pSearch.onclick = function() {
	pSearch.style.color = 'rgb(247, 47, 51)'
	pSearch.style.borderBottom = '2px solid rgb(247, 47, 51)'
	rSearch.style.color = 'black'
	rSearch.style.borderBottom = '2px solid rgb(217, 217, 217)'
}
