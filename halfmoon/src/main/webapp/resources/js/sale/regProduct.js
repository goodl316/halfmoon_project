var input_img = document.querySelector('#input_img')
var p_title = document.querySelector('#p_title')
var product_type = document.querySelector('#product_type')
var product_sub_type = document.querySelector('#product_sub_type')
var loc = document.querySelector('#loc')
var p_nm = document.querySelector('#p_nm')
var p_price = document.querySelector('#p_price')
var p_ctnt = document.querySelector('#p_ctnt')
var p_tag = document.querySelector('#p_tag')
var btn_reg = document.querySelector('#btn_reg')
var temp_img_cont = document.querySelector('#temp_img_cont')

// 유저정보파싱
var i_user = document.querySelector('#i_user')
console.log('i_user : ' + i_user.value)

// form_data
var formData = new FormData()
var formDataSize = 0

// 상품이미지 임시 등록
input_img.onchange = function () {
    let formData_temp = new FormData()
    for(var i=0; i<input_img.files.length; i++) {
        // 임시
        formData_temp.append('imgs', input_img.files[i])

        // 진짜 저장용
        formData.append('imgs', input_img.files[i])
        formDataSize = formDataSize + 1
        if (formDataSize > 4) {
            alert('이미지를 4장 이상 등록 할 수 없습니다.')
            return;
        }
    }
    fetch('/imgTempUpload',{
        method: 'post',
        body: formData_temp
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data.imgs)
        insertImg(data.imgs)
        // 대표이미지 설정
        setRepreImg()
    })
    console.log('formDataSize : ' + formDataSize)
}

// 대표이미지 설정 함수
function setRepreImg() {
    // 대표이미지 설정 view
    let repreImg = document.querySelectorAll('.temp_img_span_cont')
    let isRepre = false
    for (let i = 0; i < repreImg.length; i++) {
        if (repreImg[i].style.display != 'none' && !isRepre) {
            repreImg[i].style.color = 'red'
            isRepre = true
        }
    }
}


// 임시 상품 이미지 삽입
function insertImg(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        let span = document.createElement('span')
        span.classList.add('temp_img_span_cont')

        let img = document.createElement('img')
        img.classList.add('img_upload')
        img.classList.add('span_sub')
        img.src = `/res/img/sale/temp_${i_user.value}/${imgs[i]}`

        let div = document.createElement('div')
        div.classList.add('delete_temp_img')
        div.classList.add('span_sub')
        // 내가 추가한 속성
        div.setAttribute('index', String(formDataSize - 1))
        div.innerText = '×'
        div.onclick = function () {
            // 매우매우 무식 한 방법이지만 일단 해봄..
            console.log('before : ' + formData.getAll('imgs'))
            console.log('delete index : ' + this.getAttribute('index'))
            let tempArr = formData.getAll('imgs');
            formData.delete('imgs')
            tempArr.splice(parseInt(this.getAttribute('index')), 1)
            // 다시 추가..
            for (let j = 0; j < tempArr.length; j++) {
             formData.append('imgs', tempArr[j])
            }
            console.log('after : ' + formData.getAll('imgs'))
            // div index 속성 재 설정.
            let resetDiv = document.querySelectorAll('.delete_temp_img')

            // 해당 속성 안보이게!
            span.style.display = 'none'
            div.style.display = 'none' // 필터용.

            let setIndex = 0
            for (let k = 0; k < resetDiv.length; k++) {
                console.log('is running? : ' + setIndex)
                if (resetDiv[k].style.display === 'none') {
                    continue
                }
                resetDiv[k].setAttribute('index', String(setIndex));
                setIndex = setIndex + 1
            }
            // 사이즈 줄이기
            formDataSize = formDataSize - 1

            // 대표이미지 설정
            setRepreImg()
        }
        span.append(img)
        span.append(div)
        temp_img_cont.append(span)
    }
}



// 상품이미지 날리기
function product_img_upload (i_product) {
    var formData = new FormData()
    for(var i=0; i<input_img.files.length; i++) {
        formData.append('imgs', input_img.files[i])
    }
    formData.append('i_product', i_product) // 추가
    fetch('/productImgUpload',{
        method: 'post',
        body: formData
    })
}

// 상품등록하기
btn_reg.onclick = function () {

    var p_nmVal = p_nm.value
    var p_priceVal = p_price.value
    var i_product_typeVal = product_type.value
    var type_sub_titleVal = product_sub_type.value
    var titleVal = p_title.value
    var ctntVal = p_ctnt.value
    var i_locVal = loc.value
    var tagVal = p_tag.value
	

    // 필수입력 로직 처리 하기.
    // 제품
    if (p_nmVal.length == '') {
        alert('제품명을 입력해주세요.')
        p_nm.focus()
        return
    }
    // 가격
    if (p_priceVal == '') {
        alert('가격을 입력해주세요.')
        p_price.focus()
        return
    }
    // 대분류 : 소분류는 자동으로 정해짐
    if (i_product_typeVal == 0) {
        alert('대분류를 정해주새요')
        product_type.focus()
        return
    }
    if (titleVal == '' || titleVal.length < 5) {
        alert('제목을 작성해주세요 (최소 5글자 이상)')
        p_title.focus()
        return;
    }
    if (ctntVal == '' || ctntVal.length < 10) {
        alert('내용을 작성해주새요 (최소 10글자 이상)')
        p_ctnt.focus()
    }
    if (i_locVal == '') {
        alert('지역을 선택해주세요')
        loc.focus()
        return
    }
    // 이미지 체크
    if(input_img.files.length === 0) {
        alert('이미지를 선택해 주세요')
        return
    }
    if(input_img.files.length > 5) {
        alert('이미지는 최대 5개 까지 등록 가능합니다.')
        return
    }
    // tag 저장 : #으로 구분
    tagVal = tagVal.replaceAll(' ', '#')
    console.log(tagVal)

    var param = {
       i_user: i_user.value,
       p_nm: p_nmVal,
       p_price: p_priceVal,
       i_product_type: i_product_typeVal,
       type_sub_title: type_sub_titleVal,
       title: titleVal,
       ctnt: ctntVal,
       i_loc: i_locVal,
       state: 1, // 기본설정 : 1
       tag: tagVal
    }
    console.log(param)

    // ajax 실행
    reg_ajax(param)
}





// 상품등록 ajax
function reg_ajax (param) {
    fetch(`/regProductProc`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(param)
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch(data.result) {
            case 1:
                // 등록 성공
                console.log('i_product : ' + data.i_product)
                product_img_upload(data.i_product)
				alert('상품이 등록되었습니다.')
				location.href = "/main/home"
                break;
            case 2:
                // 등록 실패
                break;
        }
    })
}



// sub select box 동작
function typeChange(e) {
    //console.log(e.value)
    var type_1 = ["생활가전", "주방가전", "모바일/태블릿", "pc", "pc주변기기"]
    var type_2 = ["스포츠용품", "악기용품", "등산용품", "캠핑용품", "낚시용품"]
    var type_3 = ["여성상의", "여성하의", "신발/악세사리"]
    var type_4 = ["남성상의", "남성하의", "신발/악세사리"]
    var type_5 = ["가구DIY", "조명", "침구/커튼", "생활용품", "주방용품"]
    var type_6 = ["건강식품", "신선식품", "즉석식품", "기타"]
    var type_7 = ["콘솔", "기타"]
    var type_8 = ["간식", "장난감", "기타"]
    var type_9 = ["일반도서", "교육도서", "음반", "티켓"]
    var type_10 = ["유아의류", "장난감", "유아식품", "기타"]

    var target = []
    switch (e.value) {
        case '0':
           target = ['소분류']
        case '1':
            target = type_1
            break
        case '2':
            target = type_2
            break
        case '3':
            target = type_3
            break
        case '4':
            target = type_4
            break
        case '5':
            target = type_5
            break
        case '6':
            target = type_6
            break
        case '7':
            target = type_7
            break
        case '8':
            target = type_8
            break
        case '9':
            target = type_9
            break
        case '10':
            target = type_10
            break
    }
    product_sub_type.options.length = 0;
    target.forEach(function (data) {
        //console.log(data)
        let opt = document.createElement("option");
        opt.value = data
        opt.innerHTML = data
        product_sub_type.appendChild(opt);
    })
}


