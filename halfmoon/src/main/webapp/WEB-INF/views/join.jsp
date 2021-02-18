<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>


<div id=joinpage>
	<div>
		<div style="font-weight:bold;">이메일</div>
		<div><input type="text" id="id_email" onchange="chk_pattern_e()" placeholder="Email" required>
             <div id="id_email_msg"></div>
    </div>
	<div style="font-weight:bold;">비밀번호</div>
	<div><input type="password" id="user_pw" onchange="chk_pattern_pw()" placeholder="Password" required>
		<div id="pw_msg"></div>
	</div>
	<div style="font-weight:bold;">비번확인</div>
	<div><input type="password" id="user_pw_chk" onchange="chk_pw()" placeholder="Password confirm">
		<div id="pw_chk_msg"></div>
	</div>
	<div style="font-weight:bold;">이름</div>
	<div><input type="text" id="user_nm" placeholder="Name" required></div>
	<div style="font-weight:bold;">주소</div>
	<div><input type="text" id="user_address" placeholder= "Address" required></div>
	<div style="font-weight:bold;">성별</div> 
		<label>Woman<input type="radio" id="gender" value="0" checked></label>
		<label>Man<input type="radio" id="gender" value="1"></label>
		<label>None<input type="radio" id="gender" value="2"></label>		
		</div>
	<div style="font-weight:bold;">휴대전화</div>
	<div></div><input type="text" id="ph" onchange="ph_pattern_pw()" placeholder="Phone Number">
	<div id="ph_msg"></div>
</div>
	<div><input type="button" id="joinBtn" value="JOIN" onclick="join_chk()"></div>
<script defer src="/res/js/user/join.js"></script>
	


