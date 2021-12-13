<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<link rel="stylesheet" href="/res/css/main/header.css?ver=5">
<tiles:importAttribute name="menuList" />
<tiles:importAttribute name="subMenuList" />
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<!-- 테마 -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<!-- 자바스크립트 -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.3.0/sockjs.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>

<header>
	<div class="alert alert-warning" role="alert" id="socketAlert"></div>
	<!-- <input type="text" id="chktext">
	<input type="button" onclick="send()" value="send"> -->

	<div class="mainlogodiv">
		<div class="mainlogodiv2">
			<div class="mainlogo a-img">
				<a href="/main/home"> <img class="mainlogo" alt=""
					src="/res/img/mainLogo.png">
				</a>
			</div>

			<div class="main-form">
				<div class="select">
					<form class="form-select" action="" method="" id="form_search">
						<input class="main_form_input" placeholder="상품명 검색" type="text"
							name="" value=""> <img class="main-select"
							onclick="search('',0)" alt="" src="/res/img/search.png">
						<div class="form-select-window">
							<div class="window-div1">
								<div class="window-a1">최근검색어</div>
								<div class="window-a2">인기검색어</div>
							</div>
							<div id="recent_keyword">
								<!-- localstorage saved_keyword show-->
							</div>
							<div id="popular_keyword" style="display: none">
								<div class="window-div2">미구현...</div>
							</div>
							<div class="window-div3">
								<div id="btn_delete_keyword">검색어 전체 삭제</div>
								<div class="window_close">닫기</div>
							</div>
						</div>
					</form>
				</div>
				<c:if test="${loginUser == null}">
					<button id="btn_my_sell">내 물건 팔기</button>
					<a href="/login">
						<button id="btn_login">로그인</button>
					</a>
					<a href="/join">
						<button id="btn_join">회원가입</button>
					</a>
				</c:if>
				<c:if test="${loginUser != null}">
					<button id="btn_my_sell">내 물건 팔기</button>
					<a href="/logout">
						<button id="btn_logout">로그아웃</button>
					</a>
					<a href="/user/my/profile">
						<button id="btn_my_page">내정보</button>
					</a>
				</c:if>

			</div>
		</div>
	</div>
	<div class="List">
		<nav id="main-nav">
			<ul id="menuListUl">
				<c:forEach var="item" items="${menuList}">
					<li class="menuList"><img class="btn_menu_img" alt=""
						src="/res/img/menuImg/${item.i_product_type}.png"
						onclick="TypeList(${item.i_product_type},0)"></li>
				</c:forEach>
			</ul>
		</nav>
	</div>


	<div id="main_h3"></div>

	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="0" end="4">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="5" end="9"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="10" end="12"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="13" end="15"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="16" end="20"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="21" end="24"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="25" end="26"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="27" end="29"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="30" end="33"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>
	<div class="sub_div">
		<ul class="sub_ul">
			<c:forEach items="${subMenuList}" var="item" begin="34" end="37"
				step="1">
				<li onclick="TypeSubList('${item.type_sub_title}',0)">${item.type_sub_title}</li>
			</c:forEach>
		</ul>
	</div>

	<div id="sub_nav" style="display: none;">
		<ul class="sub-ul">
			<li><img class="line" src="/res/img/line.png">
				<ul>
					<li class="li-border"><a onclick="TypeList(1,0)">디지털/가전</a>
						<ul>
							<li><a onclick="TypeSubList('생활가전',0)">생활가전</a></li>
							<li><a onclick="TypeSubList('주방가전',0)">주방가전</a></li>
							<li><a onclick="TypeSubList('모바일/태블릿',0)">모바일/태블릿</a></li>
							<li><a onclick="TypeSubList('PC',0)">PC</a></li>
							<li class="last-li"><a onclick="TypeSubList('PC주변기기',0)">PC주변기기</a></li>
						</ul></li>
					<li><a onclick="TypeList2,0()">스포츠/레저</a>
						<ul>
							<li><a onclick="TypeSubList('스포츠용품',0)">스포츠용품</a></li>
							<li><a onclick="TypeSubList('악기용품',0)">악기용품</a></li>
							<li><a onclick="TypeSubList('등산용품',0)">등산용품</a></li>
							<li><a onclick="TypeSubList('캠핑용품',0)">캠핑용품</a></li>
							<li class="last-li"><a onclick="TypeSubList('낚시용품',0)">낚시용품</a></li>
						</ul></li>
					<li><a onclick="TypeList(3,0)">여성의류</a>
						<ul>
							<li><a onclick="TypeSubList('여성상의',0)">여성상의</a></li>
							<li><a onclick="TypeSubList('여성하의',0)">여성하의</a></li>
							<li class="last-li"><a onclick="TypeSubList('신발/악세사리',0)">신발/악세사리</a></li>
						</ul></li>
					<li><a onclick="TypeList(4,0)">남성의류</a>
						<ul>
							<li><a onclick="TypeSubList('남성상의',0)">남성상의</a></li>
							<li><a onclick="TypeSubList('남성하의',0)">남성하의</a></li>
							<li class="last-li"><a onclick="TypeSubList('신발/악세사리',0)">신발/악세사리</a></li>
						</ul></li>
					<li><a onclick="TypeList(5,0)">가구/인테리어</a>
						<ul>
							<li><a onclick="TypeSubList('가구DIY',0)">가구DIY</a></li>
							<li><a onclick="TypeSubList('조명',0)">조명</a></li>
							<li><a onclick="TypeSubList('침구/커튼',0)">침구/커튼</a></li>
							<li><a onclick="TypeSubList('생활용품',0)">생활용품</a></li>
							<li class="last-li"><a onclick="TypeSubList('주방용품',0)">주방용품</a></li>
						</ul></li>
					<li><a onclick="TypeList(6,0)">생활/가공식품</a>
						<ul>
							<li><a onclick="TypeSubList('건강식품',0)">건강식품</a></li>
							<li><a onclick="TypeSubList('신선식품',0)">신선식품</a></li>
							<li><a onclick="TypeSubList('즉석식품',0)">즉석식품</a></li>
							<li class="last-li"><a onclick="TypeSubList('기타',0)">기타</a></li>
						</ul></li>
					<li><a onclick="TypeList(7,0)">게임/취미</a>
						<ul>
							<li><a onclick="TypeSubList('콘솔',0)">콘솔</a></li>
							<li class="last-li"><a onclick="TypeSubList('기타',0)">기타</a></li>
						</ul></li>
					<li><a onclick="TypeList(8,0)">반려동물</a>
						<ul>
							<li><a onclick="TypeSubList('간식',0)">간식</a></li>
							<li><a onclick="TypeSubList('장난감',0)">장난감</a></li>
							<li class="last-li"><a onclick="TypeSubList('기타',0)">기타</a></li>
						</ul></li>
					<li><a onclick="TypeList(9,0)">도서/티켓/음반</a>
						<ul>
							<li><a onclick="TypeSubList('일반도서',0)">일반도서</a></li>
							<li><a onclick="TypeSubList('교육도서',0)">교육도서</a></li>
							<li><a onclick="TypeSubList('음반',0)">음반</a></li>
							<li class="last-li"><a onclick="TypeSubList('티켓',0)">티켓</a></li>
						</ul></li>
					<li class="last-li"><a onclick="TypeList(10,0)">유아용품</a>
						<ul>
							<li><a onclick="TypeSubList('유아의류',0)">유아의류</a></li>
							<li><a onclick="TypeSubList('장난감',0)">장난감</a></li>
							<li><a onclick="TypeSubList('유아식품',0)">유아식품</a></li>
							<li class="last-li" onclick="TypeSubList('기타',0)"><a
								onclick="TypeSubList('기타',0)">기타</a></li>
						</ul></li>
				</ul></li>
		</ul>
	</div>
	<div id="sub_nav_cont">
		<div id="reg_sub" style="display: none">
			<a href="">상품등록 |</a> <a href="">상품관리 |</a> <a href="">구매/판매내역</a>
		</div>
		<div id="detail_sub" style="display: none">
			<a>${user_basic.user_nm}님의 상점 | </a> <a>등록된 상품
				${user_basic.p_total}개 | </a> <a>팔로워 ?</a>
		</div>
	</div>
</header>

<script defer src="/res/js/temp/header.js?ver=9"></script>