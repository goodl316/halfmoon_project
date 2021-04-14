<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="profile_right">
    <div id="profile_right_div1">
        <h3>판매목록</h3>
    </div>
    <div id="profile_right_div2">
        <table>
            <tr>
                <th>제목</th>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>조회수</th>
                <th>상태</th>
                <th>등록일</th>
                <th>비고</th>
            </tr>
            <c:forEach var="item" items="${list}">
            <tr>
                <td>${item.title}</td>
                <td>${item.p_nm}</td>
                <td>${item.p_price}</td>
                <td>${item.type_sub_title}</td>
                <td>${item.hit}</td>
                <td>${item.state}</td>
                <td>${item.show_time}</td>
                <td class="delModBtn">
                    <button id="btn_delSaleList" onclick="delSaleProduct(${item.i_product})">
                        삭제</button>
                    <span>|</span>
                    <button id="btn_modSaleList" onclick="modSaleProduct(${item.i_product})">
                        수정</button>
                </td>
            </tr>
            </c:forEach>
        </table>
    </div>
</div>
<script src="/res/js/user/modAccount.js"></script>
<script src="/res/js/user/mySaleList.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>