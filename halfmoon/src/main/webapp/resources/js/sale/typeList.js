function moveDetail(i_product,i_user,i_product_type){
	location.href = '/sale/detail?i_product=' + i_product + '&i_user=' + i_user+'&i_product_type='+i_product_type;
}

function moveDetail2(type_sub_title,i_product,i_user,i_product_type){
	location.href = '/sale/detail?type_sub_title=' + type_sub_title + '&i_product='+i_product+'&i_user=' + i_user+'&i_product_type='+i_product_type;
}


function TypeList(i_product_type,sortState){
	console.log("aaa")
	location.href = `/sale/typeList?i_product_type=`+i_product_type+"&sortState="+sortState
}

function TypeSubList(type_sub_title,sortState){
	console.log("bbb")
	location.href =`/sale/typeList?type_sub_title=`+type_sub_title+"&sortState="+sortState
}

function SearchList(searchText,sortState){
	location.href=`/sale/typeList?searchText=`+searchText+"&$sortState="+sortState
}