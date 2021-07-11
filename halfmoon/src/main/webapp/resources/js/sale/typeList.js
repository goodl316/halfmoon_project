function moveDetail(i_product,i_user,i_product_type){
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user+'&i_product_type='+i_product_type;
}

function moveDetail2(i_product,i_user){
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user
}

function moveListSort(i_product_type,sortState){
	console.log(typeof(sortState))
	location.href= '/sale/typeListSort?i_product_type='+i_product_type+'&sortState='+sortState
}
function moveSubListSort(type_sub_title,sortState){
	location.href= '/sale/typeSubListSort?type_sub_title='+type_sub_title+'&sortState='+sortState
}