var btn_delSaleList = document.querySelector('#btn_delSaleList')
var btn_modSaleList = document.querySelector('#btn_modSaleList')


function delSaleProduct(i_product) {
    console.log('i_product :' + i_product)
    fetch(`/sale/delSale?i_product=${i_product}`, {
        method: 'GET',
    }).then(function(res) {
        return res.json()
    }).then(function(data) {
        console.log(data)
        switch(data.result) {
            case 1:
                alert('상품삭제 완료.')
                location.reload()
                break;
            case 0:
                alert('에러!')
                break;
        }
    })
}

// 아작스 x, get 방식으로 이동
function modSaleProduct(i_product) {
    location.href = `/sale/modProduct?i_product=${i_product}`
}





