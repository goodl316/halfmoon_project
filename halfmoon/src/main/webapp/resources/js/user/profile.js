// 메인 profile 컨트롤
var btn_myProduct = document.querySelector('#btn_myProduct')
var btn_myAccount = document.querySelector('#btn_myAccount')
var btn_buyHistory = document.querySelector('#btn_buyHistory')
var btn_saleHistory = document.querySelector('#btn_saleHistory')
var btn_favorite = document.querySelector('#btn_favorite')
// 메인 cont (필요없을듯.)
var profile_main_cont = document.querySelector('#profile_main_cont')


btn_myProduct.onclick = function () {
	console.log('click 1')
	location.href = '/user/my/profile?page=1'
}

btn_myAccount.onclick = function () {
	console.log('click 2')
	location.href = '/user/my/profile?page=2'
}

btn_buyHistory.onclick = function () {
	console.log('click 3')
	location.href = '/user/my/profile?page=3'
}

btn_saleHistory.onclick = function () {
	console.log('click 4')
	location.href = '/user/my/profile?page=4'
}
btn_favorite.onclick = function () {
	console.log('click 5')
	location.href = '/user/my/profile?page=5'
}










