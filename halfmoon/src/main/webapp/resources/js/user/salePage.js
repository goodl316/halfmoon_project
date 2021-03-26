var selectMenu = document.querySelector('#selectMenu')
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
	console.log ('222222222222')
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