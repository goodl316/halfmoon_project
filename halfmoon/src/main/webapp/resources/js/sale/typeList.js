function moveDetail(i_product,i_user,i_product_type){
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user+'&i_product_type='+i_product_type;
}

function moveDetail2(type_sub_title,i_product,i_user,i_product_type){
	location.href = '/sale/detail?type_sub_title=' + type_sub_title + '&i_product='+i_product+'&i_user=' + i_user+'&i_product_type='+i_product_type;
}

function moveListSort(i_product_type,sortState){
	console.log(typeof(sortState))
	location.href= '/sale/typeListSort?i_product_type='+i_product_type+'&sortState='+sortState
}
function moveSubListSort(type_sub_title,sortState){
	location.href= '/sale/typeSubListSort?type_sub_title='+type_sub_title+'&sortState='+sortState
}

function TypeList(i_product_type,sortState){
	location.href = `/sale/typeList?i_product_type=`+i_product_type+"&sortState="+sortState
}

function TypeSubList(type_sub_title,sortState){
	location.href =`/sale/typeSubList?type_sub_title=`+type_sub_title+"&sortState="+sortState
	
}