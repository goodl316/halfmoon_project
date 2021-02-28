<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<link rel="stylesheet" href="/res/css/main/header.css?ver=2">
<tiles:importAttribute name="menuList"/>
<tiles:importAttribute name="subMenuList"/>
<header>
	
	<div class="mainlogodiv">
		<div class="mainlogodiv2">
			<div class="mainlogo a-img">
				<a href="/main/home">
					<img class="mainlogo" alt="" src="/res/img/mainLogo.png">
				</a>
			</div>
			
			<div class="main-form">
				<div class="select">
					<form class="form-select" action="" method="">
						<input class="main-form-input" placeholder="상품명 검색" type="text" name="" value="">
						<img class="main-select" alt="" src="/res/img/search.png">
						<div class="form-select-window">
							<div class="window-div1">
								<div class="window-a1">최근검색어</div>
								<div class="window-a2">인기검색어</div>
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							<div class="window-div2">
								dddd
							</div>
							
							<div class="window-div3">
								<div>검색어 전체 삭제</div>
								<div class="window_close">닫기</div>
							</div>
						</div>
					</form>
				</div>
				<c:if test="${loginUser == null}">
			<button id="btn_my_sell">내 물건 팔기</button>
			<button id="btn_login">로그인</button>
			<button id="btn_join">회원가입</button>	
		</c:if>
		<c:if test="${loginUser != null}">
			<button id="btn_my_sell">내 물건 팔기</button>
			<button id="btn_logout"><a href="/logout">Logout</a></button>
			<button id="btn_my_page"><a href="/user/my/profile">내정보</a></button>
		</c:if>	
		
			</div>
		</div>
	</div>
	<div class="List">
		<nav id="main-nav">
			<ul id="menuListUl">
				<c:forEach var="item" items="${menuList}">
					<li id="menuListLi${item.i_product_type}">
						<img class="btn_menu_img" alt="" src="/res/img/menuImg/${item.i_product_type}.png">
					</li>
				</c:forEach>
			</ul>
		</nav>
		
		
		<div class="subMenuList1">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 1}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList2">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 2}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList3">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 3}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList4">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 4}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList5">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 5}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList6">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 6}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList7">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 7}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList8">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 8}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList9">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 9}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		<div class="subMenuList10">
			<c:forEach var="subitem" items="${subMenuList}">
					<c:if  test="${subitem.i_product_type == 10}">
						${subitem.type_sub_title}
					</c:if>
			</c:forEach>
		</div>
		
	</div>
</header>

<script defer src="/res/js/main/home.js?ver=2"></script>