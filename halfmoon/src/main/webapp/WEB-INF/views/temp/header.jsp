<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<tiles:importAttribute name="menuList"/>
<header>
	<img src="/res/img/mainLogo/mainLogo.png">
	<ul>	
		<c:forEach var="item" items="${menuList}">
			<li>${item.type_title}</li>
		</c:forEach>
	</ul>
	<button id="btn_login">로그인</button>
	<button id="btn_join">회원가입</button>	
	
</header>