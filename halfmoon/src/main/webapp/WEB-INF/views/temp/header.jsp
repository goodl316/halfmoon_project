<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<link rel="stylesheet" href="/res/css/main/header.css?ver=13">
<tiles:importAttribute name="menuList"/>
<header>
	<ul>
		<c:if test="${loginUser != null}">
			<li>${loginUser.user_nm}님 환영합니다</li>
			<li><a href="/logout">Logout</a></li>
		</c:if>	
	</ul>
	
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
						<input class="main-form-input" type="text" name="" value="">
						<img class="main-select" alt="" src="/res/img/search.png">
					</form>
				</div>
				<c:if test="${loginUser == null}">
			<button id="btn_my_sell">내 물건 팔기</button>
			<button id="btn_login">로그인</button>
			<button id="btn_join">회원가입</button>	
		</c:if>
		
			</div>
		</div>
	</div>
	<div>
		<nav id="main-nav">
			<ul id="menuListUl">
				<c:forEach var="item" items="${menuList}">
					<li id="menuListLi">
						<img class="btn_menu_img" alt="" src="/res/img/menuImg/${item.i_product_type}.png">
					</li>
				</c:forEach>
			</ul>
		</nav>
	</div>
	<div id="sub_menu_cont">
				<c:forEach var="item" items="${menuList}">
			<li class="sub_menu_li">
				<div>111</div>
				<div>222</div>
				<div>333</div>
				<div>444</div>
				<div>555</div>
			</li>
		</c:forEach>
	</div>
</header>



