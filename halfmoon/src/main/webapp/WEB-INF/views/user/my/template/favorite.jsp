<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<div id="profile_right">
    <div id="profile_right_div1">
		<h3>찜 내역</h3>
	</div>
	<div class="product_info_sub">
		<c:forEach var="item" items="${list}">
			<c:if test="${item.state == 1 }">
			<div class="product_cont" onclick="moveDetail(${item.i_product},${item.i_user})">
			<input type="hidden" id=i_product value="${item.i_product}">
			<div class="product_img_div">
				<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
			</div>
			<div class="product_info_cont">
				<div class="product_title">${item.title}</div>
				<div class="product_pt">
					<div class="price"><fmt:formatNumber value="${item.p_price}" pattern="#,###,###"/>원</div>
				</div>
			</div>
			<div class="loc_time_div">
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
				<div class="time">${item.show_time}</div>
			</div>
		</div>
		</c:if>
		</c:forEach>
	</div>
</div>