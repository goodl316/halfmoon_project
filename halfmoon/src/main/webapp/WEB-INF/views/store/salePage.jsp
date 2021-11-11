<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<link rel="icon" href="data:,">
<link rel="stylesheet" href="/res/css/user/salePage.css?ver=13">
<script defer src="/res/js/user/salePage.js?ver=1"></script>
<script
	src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<input type="hidden" class="i_user" value="${loginUser.i_user}">
<input type="hidden" id="selectMenu" value="${param.menu}">
<div id="salePage_cont">

	<div id="seller_info_cont">
		<div id="seller_info_left">
			<div class="seller_img_cont">
				<img class="seller_img" alt=""
					src="/res/img/user/${user.i_user}/${user.profile_img}">
			</div>
			<div>판매자명 : ${user.user_nm }</div>
			<div class="seller_star">
				<img alt="" src="/res/img/star.png"> <img alt=""
					src="/res/img/star.png"> <img alt="" src="/res/img/star.png">
				<img alt="" src="/res/img/star.png"> <img alt=""
					src="/res/img/star.png">
			</div>
			<div class="seller_product_follow">
				<a class="seller_product_a" href="">상품${user.product_count}</a> <a
					href="">팔로워${user.count_follow }</a>
			</div>
			<c:choose>
				<c:when test="${loginUser.i_user !=user.i_user }">
					<div class="seller_follow_talk_btn">
						<button class="follow"
							onclick="isfollow(${user.i_user},${loginUser.i_user})">
							<span id="followContainer" is_follow="${user.is_follow}">
								<c:choose>
									<c:when test="${user.is_follow == 0 }">
										<img alt="" src="/res/img/follow.white.png">
										<span>팔로우</span>
									</c:when>
									<c:otherwise>
										<img alt="" src="/res/img/following.png">
										<span>팔로잉</span>
									</c:otherwise>
								</c:choose>
							</span>
						</button>
						<button>
							<span>반월톡</span>
						</button>
					</div>
				</c:when>
				<c:otherwise>
				<input type="button" class="manageStore" value="내 상점 관리">
				</c:otherwise>
			</c:choose>
		</div>
		<div id="seller_info_right">
			<div id="seller_info_div1">
				<div>판매자명 : ${user.user_nm}</div>
				<br>
			</div>
			<div id="seller_info_div2">
				<div>
					<img alt="" src="/res/img/store.open.png">
					<div class="seller_sub_info">상점오픈일</div>
					<div>${user.show_time}</div>
				</div>
				<div>
					<img alt="" src="/res/img/visitant.png">
					<div class="seller_sub_info">상점방문수</div>
					<div>100명</div>
				</div>
				<div>
					<img alt="" src="/res/img/sell.count.png">
					<div class="seller_sub_info">상품판매</div>
					<div>${user.sold_out}회</div>
				</div>
				<div>
					<img alt="" src="/res/img/delivery.png">
					<div class="seller_sub_info">택배발송</div>
					<div>10회</div>
				</div>
			</div>
			<div id="seller_info_div3">판매자 설명 글</div>
			<div id="seller_info_div4">
				<a href=""><img alt="" src="/res/img/report.png">신고하기</a>
			</div>
		</div>
	</div>

	<div id="seller_info_div">
		<div>
			<button class="product_info_btn menuBtn" onclick="showMenu(1)">
				상품 <span>${user.product_count}</span>
			</button>
			<button class="product_question_btn menuBtn" onclick="showMenu(2)">
				상점문의 <span>${user.count_cmt }</span>
			</button>
			<button class="store_review_btn menuBtn" onclick="showMenu(3)">
				상점후기 <span>13</span>
			</button>
			<button class="following_btn menuBtn" onclick="showMenu(4)">
				팔로잉 <span>${user.count_following }</span>
			</button>
			<button class="follower_btn menuBtn" onclick="showMenu(5)">
				팔로워 <span>${user.count_follow }</span>
			</button>
		</div>
	</div>

	<div class="info_div1">
		<div class="product_info">
			상품 <span class="count">${user.product_count}</span>
		</div>
		<div class="product_info_sub">
			<c:forEach var="item" items="${product}">
				<div class="product_cont" onclick="">
					<input type="hidden" id=i_product value=""> <img alt=""
						src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
					<div class="product_info_cont">
						<div class="product_title">${item.title}</div>
						<div class="product_pt">
							<div class="price">
								<fmt:formatNumber value="${item.p_price}" pattern="#,###,###" />
								원
							</div>
							<div class="time">${item.show_time}</div>
						</div>
					</div>
					<div class="loc">
						<img alt="" src="/res/img/i_loc.png">${item.show_loc}
					</div>
				</div>

			</c:forEach>
		</div>
	</div>
	<input type="hidden" value="${user.i_store }" class="i_store">
	<input type="hidden" value="${user.i_user }" class="storeI_user">
	<div class="info_div2">
		<div class="product_question">
			상점문의 <span class="count">${user.count_cmt}</span>
		</div>
		<div>
			<div class="product_ctnt">
				<div class="ctnt_container">
					<input type="text" class="product_ctnt_input" placeholder="상품문의 입력"
						maxlength="100">
				</div>
				<div class="product_bottom_div">
					<span id="counter">###</span> <input type="button"
						class="product_btn"
						onclick="clkCtnt(${user.i_store},${loginUser.i_user})" value="등록">
				</div>
			</div>
			<div id="cmtList"></div>
		</div>

	</div>

	<div class="info_div3">
		<div class="store_review">
			상점후기 <span class="count">13</span>
		</div>
		<div>
			<div class="review_cont">
				<a class="review_profile" href=""> <img alt=""
					src="/res/img/basic_profile.jpg">
				</a>
				<div class="review_right_div">
					<div class="review_nm_time">
						<div class="review_nm">
							<a href="">댓글작성자이름</a>
						</div>
						<div class="review_time">1초전</div>
					</div>
					<div class="review_star">
						<img alt="" src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png">
					</div>
					<div class="review_product_nm">상품명</div>
					<div class="review_ctnt">상품글</div>
				</div>
			</div>
			<div class="review_cont">
				<a class="review_profile" href=""> <img alt=""
					src="/res/img/basic_profile.jpg">
				</a>
				<div class="review_right_div">
					<div class="review_nm_time">
						<div class="review_nm">
							<a href="">댓글작성자이름</a>
						</div>
						<div class="review_time">1초전</div>
					</div>
					<div class="review_star">
						<img alt="" src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png">
					</div>
					<div class="review_product_nm">상품명</div>
					<div class="review_ctnt">상품글</div>
				</div>
			</div>
		</div>
	</div>

	<div class="info_div4">
		<div class="following">
			팔로잉 <span class="count">${user.count_following }</span>
		</div>
		<div class="followList">
			
			<%-- <c:forEach items="${following }" var="item">
				<div class="following_user_cont">

					<div class="following_user_left">

						<a href=""><img alt="" src="/res/img/basic_profile.jpg"></a>
						<div>
							<a class="following_user_nm" href="">${item.user_nm }</a>
						</div>
						<div class="following_user_pf">
							<a href="">상품${item.saleCount}</a> <a href="">팔로워${item.countFollow}</a>
						</div>
						<div>
							<button class="following_user_btn" onclick="">
								<img alt="" src="/res/img/follow.png"> 팔로우
							</button>
						</div>

					</div>
					<div class="following_user_right">
						<c:forEach items="${p_img}" var="img">
							<c:if test="${img.target_user == item.target_user }">
								<div>
									<a href=""> <img alt=""
										src="/res/img/sale/p_${img.i_product}/${img.p_img_main}">
									</a>
								</div>
							</c:if>
						</c:forEach>
					</div>

				</div>
			</c:forEach> --%>
		</div>
	

	</div>
	<div class="info_div5">
		<div class="follower">
			팔로워 <span class="count">${user.count_follow }</span>
		</div>
		<div class="follower_info_div">
			<c:forEach items="${follower}" var="item">
				<div class="follower_info">
					<c:if test="${item.profile_img == null }">
						<a> <img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</c:if>
					<c:if test="${item.profile_img != null }">
						<a href=""> <img alt=""
							src="/res/img/user/${item.i_user}/${item.profile_img}">
						</a>
					</c:if>
					<div class="follower_user_nm">
						<a href="">${item.user_nm}</a>
					</div>
					<div class="follower_review_star">
						<img alt="" src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png">
					</div>
					<div class="following_user_pf">
						<a href="">상품${item.saleCount}</a> <a href="">팔로워${item.countFollow}</a>
					</div>
					<div>
						<button class="following_user_btn" onclick="">
							<img alt="" src="/res/img/follow.png"> 팔로우
						</button>
					</div>
				</div>
			</c:forEach>
		</div>

	</div>