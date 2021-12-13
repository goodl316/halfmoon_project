var test = document.querySelector('.test')
var testdiv = document.querySelector('.tttt')
function clk() {
	var test = document.querySelector('.test')
	var text = document.querySelector('.textInput').value

	console.log(text)
	console.log(test)
	var div = document.createElement('div')
	div.innerHTML = ` <h3>Hello</h3>`
	test.innerHTML =
		`<h3>변경했어요</h3>
	<input type="button" value = "수정" onclick="mod()">
	`
	test.append(div)

}
function mod() {
	var test = document.querySelector('.test')
	test.innerHTML =
		`
	<input type="text" class="textInput">
	<input type="button" onclick="clk()" value="확인">
	`


}


function chkkk() {
	var testdiv = document.querySelectorAll('.testt')
	var div = document.createElement('div')
	div.innerHTML = `<div>변경하기</div>`

	for (var i = 0; i < testdiv.length; i++) {
		var testdiv = document.querySelectorAll('.testt')
		var div = document.createElement('div')
		div.innerHTML = `<div>
		변경하기
		</div>`
		//var testdiv1 = document.querySelector('.test_'+i)
		testdiv[i].append(div)
	}

}
