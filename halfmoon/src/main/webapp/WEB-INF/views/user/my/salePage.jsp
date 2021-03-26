<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/res/css/user/salePage.css?ver=31">
<script defer src="/res/js/user/salePage.js?ver=1"></script>

<input type="hidden" id="selectMenu" value="${param.menu}">
<div id="salePage_cont">

	<div id="seller_info_cont">
		<div id="seller_info_left">
			<div class="seller_img_cont">
				<img class="seller_img" alt="" src="/res/img/basic_profile.jpg">
			</div>
			<div>
				판매자명
			</div>
			<div class="seller_star">
				<img alt="" src="/res/img/star.png">
				<img alt="" src="/res/img/star.png">
				<img alt="" src="/res/img/star.png">
				<img alt="" src="/res/img/star.png">
				<img alt="" src="/res/img/star.png">
			</div>
			<div class="seller_product_follow">
				<a class="seller_product_a" href="">상품12</a>
				<a href="">팔로워12</a>
			</div>
			<div class="seller_follow_talk_btn">
				<button>
					<img alt="" src="/res/img/follow.white.png">
					<span>팔로우</span>
				</button>
				<button>
					<span>반월톡</span>
				</button>
			</div>
		</div>
		<div id="seller_info_right">
			<div id="seller_info_div1">
				<div>판매자명</div>
			</div>
			<div id="seller_info_div2">
				<div>
					<img alt="" src="/res/img/store.open.png">
					<div class="seller_sub_info">상점오픈일</div>
					<div>1100일전</div>
				</div>
				<div>
					<img alt="" src="/res/img/visitant.png">
					<div class="seller_sub_info">상점방문수</div>
					<div>100명</div>
				</div>
				<div>
					<img alt="" src="/res/img/sell.count.png">
					<div class="seller_sub_info">상품판매</div>
					<div>10회</div>
				</div>
				<div>
					<img alt="" src="/res/img/delivery.png">
					<div class="seller_sub_info">택배발송</div>
					<div>10회</div>
				</div>
			</div>
			<div id="seller_info_div3">
				판매자 설명 글
			</div>
			<div id="seller_info_div4">
				<a href=""><img alt="" src="/res/img/report.png">신고하기</a>
			</div>
		</div>
	</div>
	
	<div id="seller_info_div">
		<div>
			<button class="product_info_btn menuBtn" onclick="showMenu(1)">상품 <span>13</span></button>
			<button class="product_question_btn menuBtn" onclick="showMenu(2)">상점문의 <span>13</span></button>
			<button class="store_review_btn menuBtn" onclick="showMenu(3)">상점후기 <span>13</span></button>
			<button class="following_btn menuBtn" onclick="showMenu(4)">팔로잉 <span>13</span></button>
			<button class="follower_btn menuBtn" onclick="showMenu(5)">팔로워 <span>13</span></button>
		</div>
	</div>
	
	<div class="info_div1">
		<div class="product_info">
			상품 <span class="count">13</span>
		</div>
		<div class="product_info_sub">
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
			<div class="product_cont" onclick="">
				<input type="hidden" id=i_product value="">
				<img alt="" src="/res/img/basic_profile.jpg">
				<div class="product_info_cont">
					<div class="product_title">물품이름</div>
					<div class="product_pt">
						<div class="price">25000원</div>
						<div class="time">13시간전</div>
					</div>
				</div>
				<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
			</div>
		</div>
	</div>
	
	<div class="info_div2">
		<div class="product_question">
			상점문의 <span class="count">13</span>
		</div>
		<div>
			<div class="product_ctnt">
				<div>
					<input type="text" class="product_ctnt_input"
						placeholder="상품문의 입력">
				</div>
				<div class="product_bottom_div">
					<div>0 / 100</div>
					<input type="button" class="product_btn" value="등록"
						onclick="">
				</div>
			</div>
		</div>
		
	</div>
	
	<div class="info_div3">
		<div class="store_review">
			상점후기 <span class="count">13</span>
		</div>
		<div>
			<div class="review_cont">
				<a class="review_profile" href="">
					<img alt="" src="/res/img/basic_profile.jpg">
				</a>
				<div class="review_right_div">
					<div class="review_nm_time">
						<div class="review_nm">
							<a href="">댓글작성자이름</a>
						</div>
						<div class="review_time">1초전</div>
					</div>
					<div class="review_star">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
					</div>
					<div class="review_product_nm">상품명</div>
					<div class="review_ctnt">상품글</div>
				</div>
			</div>
			<div class="review_cont">
				<a class="review_profile" href="">
					<img alt="" src="/res/img/basic_profile.jpg">
				</a>
				<div class="review_right_div">
					<div class="review_nm_time">
						<div class="review_nm">
							<a href="">댓글작성자이름</a>
						</div>
						<div class="review_time">1초전</div>
					</div>
					<div class="review_star">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
						<img alt="" src="/res/img/star.png">
					</div>
					<div class="review_product_nm">상품명</div>
					<div class="review_ctnt">상품글</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="info_div4">
		<div class="following">
			팔로잉 <span class="count">13</span>
		</div>
		<div>
			<div class="following_user_cont">
				<div class="following_user_left">
					<a href=""><img alt="" src="/res/img/basic_profile.jpg"></a>
					<div>
						<a class="following_user_nm" href="">유저이름1</a>
					</div>
					<div class="following_user_pf">
						<a href="">상품12</a>
						<a href="">팔로워13</a>
					</div>
					<div>
						<button class="following_user_btn" onclick="">
							<img alt="" src="/res/img/follow.png">
							팔로우
						</button>
					</div>
				</div>
				<div class="following_user_right">
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="following_user_cont">
				<div class="following_user_left">
					<a href=""><img alt="" src="/res/img/basic_profile.jpg"></a>
					<div>
						<a class="following_user_nm" href="">유저이름1</a>
					</div>
					<div class="following_user_pf">
						<a href="">상품12</a>
						<a href="">팔로워13</a>
					</div>
					<div>
						<button class="following_user_btn" onclick="">
							<img alt="" src="/res/img/follow.png">
							팔로우
						</button>
					</div>
				</div>
				<div class="following_user_right">
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
					<div>
						<a href="">
							<img alt="" src="/res/img/basic_profile.jpg">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="info_div5">
		<div class="follower">
			팔로워 <span class="count">13</span>
		</div>
		<div class="follower_info_div">
			<div class="follower_info">
				<a href=""><img alt="" src="/res/img/basic_profile.jpg"></a>
				<div class="follower_user_nm">
					<a href="">유저이름</a>
				</div>
				<div class="follower_review_star">
					<img alt="" src="/res/img/star.png">
					<img alt="" src="/res/img/star.png">
					<img alt="" src="/res/img/star.png">
					<img alt="" src="/res/img/star.png">
					<img alt="" src="/res/img/star.png">
				</div>
				<div class="following_user_pf">
					<a href="">상품12</a>
					<a href="">팔로워13</a>
				</div>
				<div>
					<button class="following_user_btn" onclick="">
						<img alt="" src="/res/img/follow.png">
						팔로우
					</button>
				</div>
			</div>
		</div>
	</div>
</div>










