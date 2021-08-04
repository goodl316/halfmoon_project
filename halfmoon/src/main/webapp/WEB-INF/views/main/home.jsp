<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<link rel="stylesheet" href="/res/css/home.css?ver=5">

<div>
	<div class="main-sectiondiv1">
		<div class="main_img_div">
			<img class="main_img" src="/res/img/main_img.png">
		</div>
		<div class="main_img_div">
			<img class="main_img" src="/res/img/main_img2.png">
		</div>
	
		<div class="famoush1">
			<h1>이 달의 상품</h1>
		</div>
		<div class="product_info_sub">
			<c:forEach var="item" items="${total_list}">
			<c:if test="${item.state == 1}">
				<div class="product_cont" onclick="moveDetail(${item.i_product},${item.i_user},${item.i_product_type})">
					<input type="hidden" id=i_product value="${item.i_product}">
					<div class="product_img_div">
						<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
					</div>
					<div class="product_info_cont">
						<div class="product_title">${item.title}</div>
						<div class="product_pt">
							<div class="price"><fmt:formatNumber value="${item.p_price}" pattern="#,###,###"/>원</div>
						</div>
						<div class="item_star_review">
							<div class="item_star_img">
								<img alt="" src="/res/img/star.png">4.6
							</div>
							<div class="item_review">댓글 ${item.cmt_count}</div>
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

		<div class="famoush1">
			<h1>중고거래 인기매물</h1>
		</div>
		<div class="product_info_sub">
				<c:forEach var="item" items="${total_list}">
					<c:if test="${item.state == 1}">
					<div class="product_cont" onclick="moveDetail(${item.i_product},${item.i_user},${item.i_product_type})">
						<input type="hidden" id=i_product value="${item.i_product}">
						<div class="product_img_div">
							<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
						</div>
						<div class="product_info_cont">
							<div class="product_title">${item.title}</div>
							<div class="product_pt">
								<div class="price"><fmt:formatNumber value="${item.p_price}" pattern="#,###,###"/>원</div>
							</div>
							<div class="item_star_review">
								<div class="item_star_img">
									<img alt="" src="/res/img/star.png">4.6
								</div>
								<div class="item_review">댓글 1200</div>
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
</div>
