var btn_my_sell = document.querySelector('#btn_my_sell')
var main_nav = document.querySelector('#main-nav')
var sub_nav = document.querySelector('#sub-nav')
var sub_nav2 = document.querySelector('#sub_nav')

console.log(window.location.href)

// 현재 url 위치 파싱 (자주 쓰일 듯.)
function getUrl() {
    var url = window.location.href.split('/')
    var val = '/';
    for (var i = 3; i < url.length; i++) {
        val += url[i]
        if (i != url.length - 1) {
            val += '/'
        }
    }
    return val;
}

console.log(getUrl())
// 상품등록페이지일때 menuList none and 위치 표시
if (getUrl() === '/sale/regProduct') {
    sub_nav.style.display = 'block'
    sub_nav2.style.display = 'block'
    main_nav.innerHTML = '<h3>반월마켓 판매자센터</h3>'
}

// 물건팔기 ajax
btn_my_sell.onclick = function () {
    btn_my_sell_ajax()
}

function btn_my_sell_ajax() {
    fetch(`/regProduct`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch (data.result) {
            case 0:
                alert('로그인 후 이용 가능합니다.')
                break
            case 1:
                location.href = '/sale/regProduct'
                break
        }
    })
}











