<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<link rel="stylesheet" href="/res/css/main/login.css?ver=6">
<div id="loginPage">
	<a href="/main/home">
		<img alt="반월마켓" src="/res/img/mainLogo.png">
	</a>
	<form id="loginCont">
		<div><input class="login_id" type="text" name="id_email" onkeyup="enterkey()" placeholder="id_email" value="goodl316@naver.com"></div>
		<div><input class="login_password" type="password" onkeyup="enterkey()" name="clk_pw" placeholder="password" value="!qweasd23"></div>
		<div><input class="login_button" type="button" id="btn_login"value="로그인"></div>
		<div class="logindiv">
			<a class="logindiv_a" onclick="findId(1)">아이디찾기</a>
			<a class="logindiv_a" onclick="findPw(3)">비밀번호찾기</a>
			<a class="logindiv_a" href="/join">회원가입</a>

		</div>
	</form>
</div>
<script defer src="/res/js/user/login.js?ver=3"></script>