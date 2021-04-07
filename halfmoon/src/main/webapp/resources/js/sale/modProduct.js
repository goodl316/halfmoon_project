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

// 이미지 수정 버그 해결에 집중하자... 일단 대표이미지는 수정 불가.

// 수정용 i_product
var i_product = document.querySelector('#i_product')

// 유저정보파싱
var i_user = document.querySelector('#i_user')
console.log('i_user : ' + i_user.value)

// delete 등록된 이미지 수정용
var mod_img_span_cont = document.querySelectorAll('.mod_img_span_cont')
var delete_mod_img = document.querySelectorAll('.delete_mod_img')
for (let i = 1; i < delete_mod_img.length; i++) {
    delete_mod_img[i].onclick = () => {
        let imgNm = delete_mod_img[i].getAttribute('value')
        console.log('delete_mod_img... : ' + imgNm)
        delete_mod_img_ajax(imgNm, i)
    }
}

// delete img ajax
function delete_mod_img_ajax(imgNm, i) {
    fetch(`/imgModDelete?i_product=${i_product.value}&imgNm=${imgNm}`,{
        method: 'GET'
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        // display none (do you know why + 1??)
        mod_img_span_cont[i].style.display = 'none'
        formDataSize = formDataSize - 1
        console.log('delete result : ' + data.result)
    })
}

// 사진 수정시 formSize 버그 해결해보자.......


// form_data
var formData = new FormData()
var formDataSize = mod_img_span_cont.length

// this is spaghetti code..
var modIndex = 0

// 상품이미지 임시 등록
input_img.onchange = function () {
    let formData_temp = new FormData()
    for(var i=0; i<input_img.files.length; i++) {
        // 임시
        formData_temp.append('imgs', input_img.files[i])

        // test code
        //console.log(formData_temp.getAll('imgs'))

        // 진짜 저장용
        formData.append('imgs', input_img.files[i])
        formDataSize = formDataSize + 1
        modIndex = modIndex + 1
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
    })
    console.log('formDataSize : ' + formDataSize)
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
        div.setAttribute('index', String(modIndex - 1))
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
            modIndex = modIndex - 1
            console.log('formDataSize : ' + formDataSize)
        }
        span.append(img)
        span.append(div)
        temp_img_cont.append(span)
    }
}



// 상품이미지 날리기
function product_img_upload (i_product) {
    console.log('final : ' + formData.getAll('imgs'))
    formData.append('i_product', i_product) // 추가
    formData.append('i_user', i_user.value) // 추가
    formData.append('isMod', 1) // 추가
    fetch('/productImgUpload',{
        method: 'post',
        body: formData
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch(data) {
            case 1:
                // 상품 등록 성공
                alert('상품이 성공적으로 수되었습니다.')
                location.href = `/sale/detail?i_product=${i_product}&i_user=${i_user.value}`
                break;
            case 2:
                // 이미지 등록 실패
                alert('에러:상품이미지등록실패')
                break;
        }
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
        return;
    }
    if (i_locVal == '') {
        alert('지역을 선택해주세요')
        loc.focus()
        return
    }
    // tag 저장 : #으로 구분
    tagVal = tagVal.replaceAll(' ', '#')
    console.log(tagVal)

    var param = {
        i_product: i_product.value,
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

    // ajax 실행 (test 중)
    mod_ajax(param)
}

// 상품수정 ajax
function mod_ajax (param) {
    fetch(`/modProductProc`, {
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
                product_img_upload(i_product.value)
                break;
            case 0:
                // 등록 실패
                alert('에러:상품등록실패')
                break;
        }
    })
}



// sub select box 동작
function typeChange(e) {
    //console.log(e.value)
    var type_1 = ["생활가전", "주방가전", "모바일/태블릿", "pc", "pc주변기기"]
    var type_2 = ["스포츠용품", "악기용품", "등산용품", "캠핑용품", "낚시용품"]
    var type_3 = ["상의", "하의", "신발/악세사리"]
    var type_4 = ["상의", "하의", "신발/악세사리"]
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


