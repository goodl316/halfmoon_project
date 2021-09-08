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
	location.href=`/sale/typeList?searchText=`+searchText+"&sortState="+sortState
}
// Paging Mapping
function movePage(startPage,cntPerPage,i_product_type,sortState){
	location.href="/sale/typeList?nowPage="+(startPage - 1)+"&cntPerPage="+cntPerPage+'&i_product_type='+i_product_type+"&sortState="+sortState;
}
function movePageSub(startPage,cntPerPage,type_sub_title,sortState){
	location.href="/sale/typeList?nowPage="+(startPage - 1)+"&cntPerPage="+cntPerPage+'&type_sub_title='+type_sub_title+"&sortState="+sortState;
}
function movePageSearch(startPage,cntPerPage,searchText,sortState){
	location.href="/sale/typeList?nowPage="+(startPage - 1)+"&cntPerPage="+cntPerPage+'&searchText='+searchText+"&sortState="+sortState;
}
//====================== 분할 ===================================
function movePage1(nowPage,cntPerPage,i_product_type,sortState){
	location.href="/sale/typeList?nowPage="+nowPage+"&cntPerPage="+cntPerPage+'&i_product_type='+i_product_type+"&sortState="+sortState;
}

function movePage1Sub(nowPage,cntPerPage,type_sub_title,sortState){
	location.href="/sale/typeList?nowPage="+nowPage+"&cntPerPage="+cntPerPage+'&type_sub_title='+type_sub_title+"&sortState="+sortState;
}

function movePage1Search(nowPage,cntPerPage,searchText,sortState){
	location.href="/sale/typeList?nowPage="+nowPage+"&cntPerPage="+cntPerPage+'&searchText='+searchText+"&sortState="+sortState;
}
//====================== 분할 ===================================
function movePage2(endPage,cntPerPage,i_product_type,sortState){
	locaiont.href="/sale/typeList?="+(endPage+1)+"&cntPerPage="+cntPerPage+'&i_product_type='+i_product_type+"&sortState="+sortState;
}

function movePage2Sub(endPage,cntPerPage,type_sub_title,sortState){
	locaiont.href="/sale/typeList?="+(endPage+1)+"&cntPerPage="+cntPerPage+'&type_sub_title='+type_sub_title+"&sortState="+sortState;
}
function movePage2Search(startPage,cntPerPage,searchText,sortState){
	location.href="/sale/typeList?nowPage="+(startPage - 1)+"&cntPerPage="+cntPerPage+'&searchText='+searchText+"&sortState="+sortState;
}

