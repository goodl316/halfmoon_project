<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id=joinpage>
	<form id=joinCont>
	<div>
		<div><input type="text" name="id_email" placeholder="id_email" required></div>
		<div><input type="password" name="user_pw" placeholder="password" required></div>
		<div><input type="password" name="user_pw_chk" placeholder="password check"></div>
		<div><input type="text" name="user_nm" placeholder="Your Name" required></div>
		<div><input type="text" name="user_address" placeholder= "Your Address" required></div>
		<div>
			Gender : 
			<label>Woman<input type="radio" name="gender" value="0" checked></label>
			<label>Man<input type="radio" name="gender" value="1"></label>					
			</div>
		<div>
			<input type="text" name="ph" placeholder="Your Phone Number">
		</div>
		<div><input type="button" value="JOIN" id="joinBtn"></div>
	</div>
	</form>
</div>
<script defer src="/res/js/user/user.js"></script>