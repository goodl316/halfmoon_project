<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/res/css/user/user_page.css?ver=5">
<div id="profile" >
<div id="profile-logo">
	<a href="/main/home">
		<img alt="" src="/res/img/mainLogo.png">
	</a>
</div>
<div id="profile-div">
<div id="profile_left">
	<div id="profile-left-div1">
		<h2>마이 페이지</h2>
	</div>
	<div id="profile-left-div2">
		<div id="btn_myProduct">등록물건</div>
		<div id="btn_myAccount">내 계정</div>
		<div id="btn_buyHistory">구매 내역</div>
		<div id="btn_saleHistory">판매 내역</div>
		<div id="btn_favorite"> 찜 내역</div>
	</div>
</div>
	<div id="profile_main_cont">
		<jsp:include page="${page}"/>
	</div>
</div>
</div>
<script src="/res/js/user/profile.js"></script>
<script src="/res/js/sale/typeList.js"></script>









