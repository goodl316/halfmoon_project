<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>      
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 

<div id="profileCont">
	<div id="Uprofile">프로필이미지 : ${loginUser.profile_img}
		<input type="file" id="inputImg" multiple accept="image/*">
		<input type="button" value="업로드" onclick="uploadImg()">
	</div>
	<div>아이디 : ${loginUser.id_email} </div> 
	<div>비밀번호 : <input type="password" name="user_pw" placeholder="현재 비밀번호" >
				 <input type="button" value="비밀번호 변경" onclick="clkPw(${loginUser.i_user})"></div>						
	<div>이름 : ${loginUser.user_nm} </div>
	<div id="Uph">핸드폰번호 : ${loginUser.ph} </div>
	<div id=Uaddress>주소 : ${loginUser.user_addr}
	<input type="button" value="주소변경" onclick="chAddr()">
	<div id="daumAddrApi">
		<input type="text" id="postcode" placeholder="우편번호">
		<input type="button" onclick="execDaumPostcode()" value="우편번호 찾기"><br>
		<input type="text" id="roadAddress" placeholder="도로명주소">
		<input type="text" id="jibunAddress" placeholder="지번주소">
		<span id="guide" style="color:#999;display:none"></span>
		<input type="text" id="detailAddress" placeholder="상세주소">
		<input type="text" id="extraAddress" placeholder="참고항목">
	</div>
	</div>
</div>
<script src="/res/js/user/profile.js"></script>