<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<tiles:importAttribute name="menuList"/>
<script defer src="/res/js/sale/regProduct.js"></script>
<h2>기본정보</h2>
<div>
    <div>
        상품이미지
        <input id="input_img" type="file" multiple accept="image/*"/><br>
         - 최대 5개 까지 등록 가능 합니다.
    </div>
    <div>
        제목
        <input type="text" id="p_title" placeholder="상품 제목을 입력해주세요" value="테스트제목12">
    </div>
    <div>
        카테고리 <!-- jstl로 상품타입 뿌릴 것. -->
        <select id="product_type" onchange="typeChange(this)">
            <option value="0">대분류</option>
            <c:forEach var="item" items="${menuList}">
                <option value="${item.i_product_type}">${item.type_title}</option>
            </c:forEach>
        </select>
        <select id="product_sub_type">
            <option value="0">소분류</option>
        </select>
    </div>
    <div>
        거래지역
        <select id="loc">
            <option value="">지역선택</option>
            <c:forEach var="item" items="${loc}">
                <option value="${item.i_loc}">${item.loc_nm}</option>
            </c:forEach>
        </select>
    </div>
    <div>
        제품명
        <input type="text" id='p_nm' placeholder="제품명을 입력해주세요" value="테스트제품">
    </div>
    <div>
        가격
        <input type="number" id='p_price' placeholder="숫자만 입력해주세요" value="10000">원
    </div>
    <div>
        설명<textarea id="p_ctnt" placeholder="상품 설명을 입력해주세요">테스트제품설명12121212</textarea>
    </div>
    <div>
        연관태그<textarea id="p_tag" placeholder="연관태그를 입력해주세요.(최대 5개)"></textarea><br>
        - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.<br>
        - 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을 보장하지는 않습니다.<br>
        - 검색 광고는 태그정보를 기준으로 노출됩니다.<br>
        - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.<br>
    </div>
    <div>
        <button id="btn_reg">상품등록</button>
    </div>
</div>

