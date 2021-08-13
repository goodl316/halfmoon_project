<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet"
	href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
	integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
	crossorigin="anonymous" />
<link rel="stylesheet" href="/res/css/sale/detail.css?ver=13">

<div id="detail_cont">

	<!-- 본격 디테일 작업 시작, 번개장터 참고.-->

	<div id="main_detail_cont">
		<div id="main_detail_cont_left">
			<div class="mySlides fade">
				<img class="slideImg"
					src="/res/img/sale/p_${data.i_product}/${data.p_img_main}">
			</div>
			<div class="mySlides fade">
				<img class="slideImg" src="/res/img/menuImg/1.png">
			</div>
			<div class="mySlides fade">
				<img class="slideImg"
					src="/res/img/sale/p_${data.i_product}/${data.p_img_main}">
			</div>

			<a class="prev" onclick="plusSlides(-1)">&#10094;</a> <a class="next"
				onclick="plusSlides(1)">&#10095;</a>

			<div style="text-align: center">
				<span class="dot" onclick="currentSlide(1)"></span> <span
					class="dot" onclick="currentSlide(2)"></span> <span class="dot"
					onclick="currentSlide(3)"></span>
			</div>
		</div>

		<div id="main_detail_cont_right">
			<div id="detail_title">${data.title}</div>
			<div id="detail_price">${data.p_price}원</div>
			<div id="detail_mid">
				<div class="after">찜 ${favorite.user_count}</div>
				<div class="after">뷰 ${data.hit}</div>
				<div>${data.show_time}</div>
			</div>
			<div id="detail_loc_div">
				<div id="detail_loc">거래지역</div>
				<div>${data.show_loc}</div>
			</div>
			<div id="detail_state_div">
				<div id="detail_state">상품상태</div>
				<c:choose>
					<c:when test="${data.state == 1}">
						<div>판매중</div>
					</c:when>
					<c:when test="${data.state == 2}">
						<div>판매완료</div>
					</c:when>
				</c:choose>
			</div>
			<div id="detail_seller_div">
				<div id="detail_seller">판매자명</div>
				<div>${data.user_nm}</div>
			</div>
			<div>
				<button class="like" onclick="toggleFavorite(${data.i_product});">
					찜하기
					<c:if test="${loginUser != null}">
						<span id="favoriteContainer" is_favorite="${data.is_favorite}">
							<c:choose>
								<c:when test="${data.is_favorite == 1}">
									<i class="fas fa-heart"></i>
								</c:when>
								<c:otherwise>
									<i class="far fa-heart"></i>
								</c:otherwise>
							</c:choose>
						</span>
					</c:if>
				</button>
				<button class="deal">거래신청</button>
				<c:if test="${loginUser.i_user == data.i_user}">
					<input type="hidden" id="sold_i_product" value="${data.i_product}">
					<c:choose>
						<c:when test="${data.state == 1}">
							<button class='sold_out' onclick="sold_out(2)">판매완료</button>
						</c:when>
						<c:when test="${data.state == 2}">
							<button class="sold_out" onclick="sold_out(1)">판매중</button>
						</c:when>
					</c:choose>
				</c:if>
			</div>
		</div>
	</div>
	<div>
		<div class="similiar_product_title">연관상품</div>
	</div>
	<div class="similar_product">
		<div class="similarSlide">
			<div class="imgFlex">
				<div class="page">1/3</div>
				<c:forEach var="item" items="${img}" begin="0" end ="5">
					<div>
						<c:choose>
							<c:when test="${data.p_img_main != item.p_img_main }">
								<img class="similarSlideImg"
									onclick="moveDetail(${item.i_product},${item.i_user},${item.i_product_type })"
									src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
								<div class="product_title">
									<div class="product_data_title">${item.title}</div>
								</div>
							</c:when>
						</c:choose>

					</div>
				</c:forEach>
			</div>
		</div>

		<a class="prev1" onclick="plusSlides1(-1)">&#10094;</a> <a
			class="next1" onclick="plusSlides1(1)">&#10095;</a>

		<div style="text-align: center">
			<span class="dot1" onclick="currentSlide1(1)"></span> <span
				class="dot1" onclick="currentSlide1(2)"></span> <span class="dot1"
				onclick="currentSlide1(3)"></span>
		</div>
	</div>

	<div id="last_detail_cont">
		<div id="last_detail_cont_right">
			<div class="">
				<button class="product_info_btn">상품정보</button>
				<button class="product_question_btn">상품문의</button>
			</div>
			<div class="product_info_div">
				<div class="product_info">상품정보</div>
				<div class="product_ctnt">${data.ctnt}</div>
				<div class="product_subInfo">
					<div class="i_loc_div">
						<img class="i_loc_img" alt="거래지역" src="/res/img/i_loc.png">
						<div class="i_loc">거래지역</div>
						<div>${data.show_loc}</div>
					</div>
					<div class="category_div">
						<img class="category_img" alt="카테고리" src="/res/img/category.png">
						<div class="category">카테고리</div>
						<div>${data.type_sub_title}</div>
					</div>
					<div class="tag_div">
						<img class="tag_img" alt="상품태그" src="/res/img/tag.png">
						<div class="tag">상품태그</div>
						<div class="data_tag">${data.tag}</div>
					</div>
				</div>
			</div>
			<div class="product_question_div">
				<div class="product_question">상품문의</div>
				<div class="product_div">
					<div class="product_ctnt_div">
						<input type="text" class="product_ctnt_input"
							placeholder="상품문의 입력">
					</div>
					<div class="product_div2">
						<div>0 / 100</div>
						<label id="secret_chk">비밀글 등록<input id="isSecret"
							type="checkbox" name="isSecret" value="1"></label> <input
							type="button" class="product_btn" value="등록"
							onclick="clkCtnt(${data.i_product},${loginUser.i_user})">
					</div>
				</div>
				<input type="hidden" id="loginI_user" value="${loginUser.i_user}">
				<input type="hidden" id="productI_user" value="${data.i_user}">
				<input type="hidden" id="i_product2" value="${data.i_product}">
				<span id="i_product" data-id="${data.i_product}"></span>
				<div id="cmtList"></div>
			</div>
		</div>

		<div id="last_detail_cont_left">
			<div class="site_btn">
				<button class="img_btn1">
					<img class="naver" alt="" src="/res/img/naver.png">
				</button>
				<button class="img_btn2">
					<img class="facebook" alt="" src="/res/img/facebook.png">
				</button>
				<button class="img_btn3">
					<img class="twitter" alt="" src="/res/img/twitter.png">
				</button>
				<button class="img_btn4">
					<img class="url" alt="" src="/res/img/url.png">
				</button>
			</div>
			<div class="shop_info">상점정보</div>
			<div class="shop_user_div">
				<a href=""> <img class="user_profile" alt="판매자 프로필"
					src="/res/img/naver.png">
				</a>
				<div>
					<div>
						<a href="" class="user_id">${data.i_user}</a>
					</div>
					<div>
						<a href="" class="shop_after">상품 ${data.i_user}</a> <a href="">팔로워
							${data.i_user}</a>
					</div>
				</div>
			</div>
			<button class="follow_btn">
				<img alt="" src="/res/img/follow.png"> 팔로우
			</button>
			<div class="user_product">
				<a href=""> <img alt="판매자 물품1" src="/res/img/naver.png">
				</a> <a href=""> <img alt="판매자 물품2" src="/res/img/naver.png">
				</a>
			</div>
			<div class="user_product_more">
				<a href="/user/my/salePage?menu=1">${data.i_user} 상품 더보기 ></a>
			</div>
			<div class="product_review ">
				상품후기 <span>${data.i_user}</span>
			</div>
			<div class="product_review_div">
				<a href=""> <img class="user_profile" alt="판매자 프로필"
					src="/res/img/naver.png">
				</a>
				<div class="product_review_right">
					<div class="product_review_user">
						<a href="">${data.i_user}</a>
						<div>${data.show_time}</div>
					</div>
					<div class="review_star">
						<img alt="" src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png"> <img alt=""
							src="/res/img/star.png">
					</div>
					<div class="review_ctnt">${data.ctnt}</div>
				</div>
			</div>
			<div class="store_review_more">상점후기 더보기 ></div>
			<div class="btn_div">
				<button class="like_btn">찜하기</button>
				<button class="deal_btn">거래신청</button>
			</div>
		</div>
	</div>
</div>

<script defer src="/res/js/sale/detail.js?ver=5"></script>



