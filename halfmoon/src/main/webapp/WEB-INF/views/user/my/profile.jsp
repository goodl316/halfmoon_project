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
	<div>비밀번호 : <input type="password" id="user_pw" name="user_pw" placeholder="현재 비밀번호" >
				 <input type="button" value="비밀번호 변경" onclick="clkPw(${loginUser.i_user})"></div>						
	<div>이름 : ${loginUser.user_nm} </div>
	<div id="Uph">핸드폰번호 : ${loginUser.ph} </div>
	<div id=Uaddress>주소 : 
	<div id="daumAddrApi">
		<input type="text" id="postcode" value="${loginUser.postcode}"placeholder="우편번호">
		<input type="button" onclick="execDaumPostcode()" value="우편번호 찾기"><br>
		<input type="text" id="roadAddress" value="${loginUser.roadAddr}"placeholder="도로명주소">
		<input type="text" id="jibunAddress" value="${loginUser.jibunAddr}" placeholder="지번주소">
		<span id="guide" style="color:#999;display:none"></span>
		<input type="text" id="detailAddress" value="${loginUser.detailAddr}"placeholder="상세주소">
		<input type="text" id="extraAddress" value="${loginUser.extraAddr}"placeholder="참고항목">
	</div>
	<input type="button" value="주소변경" onclick="chAddr()">
	</div>
</div>
<script src="/res/js/user/profile.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>