<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/res/css/user/findInfo.css">

    <title>아이디/비밀번호 찾기</title>
</head>
<div class="topbar">
<a href="/main/home">
<img class="img-home" src="/res/img/mainLogo/mainLogo.png" />
</a>
<ul>
<li><a href="/login">로그인</a></li>
<li><a href="/join">회원가입</a></li>
</ul>
</div>
<header>
    <!-- Tab links -->
        <div class="tabs">
        <button id="tab1" class="tablinks" onclick="openTab(event, 'findId')">아이디찾기</button>
        <button id="tba2" class="tablinks" onclick="openTab(event, 'findPw')">비밀번호찾기</button>
        </div>
</header>
    <!--탭 메뉴 내용 시작-->
    <!--아이디 찾기 탭-->
<section>
    <div class="tab_content">
    <div id="findId" class="tabcontent">
        <h2>이메일 아이디 찾기</h2>
        <p>가입하신 성함과 휴대폰 번호를 입력해주십시오</p>
        <div class="belowcontent">
        <div>이름 : <input type="text" id="findIdUserNm" name="user_nm"></div>
        <div>휴대폰 번호 : <input type="text" id="findIdUserPh" onchange="ph_pattern_pw()" name="user_ph"></div>
        <div id="ph_msg"></div>
        <div><input type="button" id="modal_open_btn" value="입력완료"></div>
        </div>
    </div>

    <!--비밀번호 찾기 탭-->
    <div id="findPw" class="tabcontent" style="display: none;">
        <h2>비밀번호 찾기</h2>
            <p>가입하신 성함과 이메일을 입력해주십시오</p>
            <div class="belowcontent">
            <div>이름 : <input type="text" id="findPwUserNm" name="user_nm"></div>
            <div>이메일 : <input type="text" id="findPwUserEmail" onchange="ph_pattern_pw()" name="user_ph"></div>
            <div id="ph_msg"></div>
            <input type="button"  value="입력완료"> 
          </div>
            

    </div>
</div>
</section>
<script defer src="/res/js/user/findInfo.js"></script>
