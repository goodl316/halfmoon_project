<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<link rel="stylesheet" href="/res/css/main/header.css">
<tiles:importAttribute name="menuList"/>
<header>
	<ul>
		<c:if test="${loginUser != null}">
			<li>${loginUser.user_nm}님 환영합니다.</li>
			<li><a href="/logout">Logout</a></li>
		</c:if>	
	</ul>
	
	<div class="mainlogodiv">
		<div class="mainlogodiv2">
			<div class="mainlogo a-img">
				<a href="/main/home">
					<img class="mainlogo" alt="반월마켓" src="/res/img/mainLogo/mainLogo.png">
				</a>
			</div>
			
			<div class="main-form">
				<div class="select">
					<form class="form-select" action="" method="">
						<input class="main-form-input" type="text" name="" value="">
						<img class="main-select" alt="" src="/res/img/mainLogo/mainLogo.png">
					</form>
				</div>
				<c:if test="${loginUser == null}">
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
						<img class="" alt="" src="/res/img/menuImg/${item.i_product_type}.jpg">
					</li>
				</c:forEach>
			</ul>
		</nav>
	</div>	
</header>
