<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<tiles:importAttribute name="menuList" />
<script defer src="/res/js/sale/modProduct.js"></script>
<link rel="stylesheet" href="/res/css/sale/regProduct.css">
<!-- hidden tags -->
<input id="i_user" type="hidden" value="${loginUser.i_user}" />
<input id="i_product" type="hidden" value="${data.i_product}" />

<div id="regProduct">
	<div class="regProduct_div1">
		<h1 class="h1">기본정보(수정)</h1>
		<span class="span1_check">*필수항목</span>
	</div>
	<div id="isRepreMsg">*대표이미지는 수정이 불가능 합니다.</div>
	<div class="product">
		<div class="div-Text1">
			상품이미지 <span class="span1">*</span>
		</div>
		<div class="div-right1">
			<label for="input_img"> <img class="img_upload"
				src="/res/img/img_upload.png" />
			</label> <span id="temp_img_cont"> <!-- 대표이미지 우선 표시 --> <c:forEach
					items="${mod_img_list}" var="item">
					<c:if test="${item == data.p_img_main}">
						<span class="mod_img_span_cont temp_img_span_cont"> <img
							class="img_upload span_sub" style="color: red;"
							src="/res/img/sale/p_${data.i_product}/${item}">
							<div class="delete_mod_img span_sub" value="${item}"></div>
						</span>
					</c:if>
				</c:forEach> <!-- 대표이미지가 아님 --> <c:forEach items="${mod_img_list}" var="item">
					<c:if test="${item != data.p_img_main}">
						<span class="mod_img_span_cont temp_img_span_cont"> <img
							class="img_upload span_sub"
							src="/res/img/sale/p_${data.i_product}/${item}">
							<div class="delete_mod_img span_sub" value="${item}">×</div>
						</span>
					</c:if>
				</c:forEach>
			</span> <input id="input_img" type="file" multiple accept="image/*" /><br>
			- 최대 4개 까지 등록 가능 합니다.
			<div class="img_upload_cont"></div>
		</div>
	</div>
	<div class="product">
		<div class="div-Text2">
			제목 <span class="span1">*</span>
		</div>
		<div class="div-right2">
			<input type="text" id="p_title" placeholder="상품 제목을 입력해주세요"
				value="${data.title}">
		</div>
	</div>
	<div class="product">
		<div class="div-Text2">
			카테고리 <span class="span1">*</span>
		</div>
		<div>
			<select id="product_type" onchange="typeChange(this)">
				<option value="0">대분류</option>
				<c:forEach var="item" items="${menuList}">
					<c:choose>
						<c:when test="${item.i_product_type == data.i_product_type}">
							<option value="${item.i_product_type}" selected>
								${item.type_title}</option>
						</c:when>

						<c:when test="${item.i_product_type != data.i_product_type}">
							<option value="${item.i_product_type}">
								${item.type_title}</option>
						</c:when>
					</c:choose>
				</c:forEach>
			</select> 
			<select id="product_sub_type">
				<option value="0">소분류</option>
			</select>
		</div>
	</div>
	<div class="product">
		<div class="div-Text2">
			거래지역 <span class="span1">*</span>
		</div>
		<div>
			<select id="loc">
				<option>지역선택</option>
				<c:forEach var="item" items="${loc}">
					<c:choose>
						<c:when test="${item.i_loc == data.i_loc}">
							<option value="${item.i_loc}" selected>${item.loc_nm}</option>
						</c:when>
						<c:when test="${item.i_loc != data.i_loc}">
							<option value="${item.i_loc}">${item.loc_nm}</option>
						</c:when>
					</c:choose>
				</c:forEach>
			</select>
		</div>
	</div>
	<div class="product">
		<div class="div-Text2">
			제품명 <span class="span1">*</span>
		</div>
		<div>
			<input type="text" id='p_nm' placeholder="제품명을 입력해주세요"
				value="${data.p_nm}">
		</div>
	</div>
	<div class="product">
		<div class="div-Text2">
			가격 <span class="span1">*</span>
		</div>
		<div class="won">
			<input type="number" id='p_price' placeholder="숫자만 입력해주세요"
				value="${data.p_price}">원
		</div>
	</div>
	<div class="product">
		<div class="div-Text7">설명</div>
		<div>
			<textarea id="p_ctnt" placeholder="상품 설명을 입력해주세요">${data.ctnt}</textarea>
		</div>
	</div>
	<div class="product">
		<div class="div-Text8">연관태그</div>
		<div class="explanation">
			<textarea id="p_tag" placeholder="연관태그를 입력해주세요.(최대 5개)">${data.tag}</textarea>
			<br> - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.<br> - 태그는 검색의
			부가정보로 사용 되지만, 검색 결과 노출을 보장하지는 않습니다.<br> - 검색 광고는 태그정보를 기준으로
			노출됩니다.<br> - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면<br>노출이
			중단되거나 상품이 삭제될 수 있습니다.
		</div>
	</div>
</div>
<footer>
	<div class="register-div">
		<button id="btn_reg">상품수정</button>
	</div>
</footer>


