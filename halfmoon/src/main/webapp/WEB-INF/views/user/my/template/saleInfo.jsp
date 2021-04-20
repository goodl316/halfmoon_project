<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="profile_right">
	<div id="profile_right_div1">
		<h3>판매 내역</h3>
	</div>
	<div class="sale_product">판매 중인 물품</div>
	<div class="product_info_sub">
		<c:forEach var="item" items="${list}">
			<div class="product_cont" onclick="">
			<input type="hidden" id=i_product value="">
			<img alt="" src="/res/img/basic_profile.jpg">
			<div class="product_info_cont">
				<div class="product_title">${item.title}</div>
				<div class="product_pt">
					<div class="price">${item.p_price}</div>
					<div class="time">${item.show_time}</div>
				</div>
			</div>
			<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
		</div>
		</c:forEach>
	</div>
	<div class="sold_product">판매 완료 물품</div>
	<div class="product_info_sub">
		<c:forEach var="item" items="${list}">
			<div class="product_cont" onclick="">
			<input type="hidden" id=i_product value="">
			<img alt="" src="/res/img/basic_profile.jpg">
			<div class="product_info_cont">
				<div class="product_title">${item.title}</div>
				<div class="product_pt">
					<div class="price">${item.p_price}</div>
					<div class="time">${item.show_time}</div>
				</div>
			</div>
			<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
		</div>
		</c:forEach>
	</div>
</div>
