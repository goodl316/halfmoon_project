<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="profile_right">
    <div id="profile_right_div1">
        <h3>내 계정 수정</h3>
    </div>
    <div id="profile_right_div2">
    
    <div id="User_mod_cont">
    	<div id="Uprofile">
            <div id="proImgCont">
                <c:if test="${loginUser.profile_img != null}">
                    <img id="user_profile_img" class="profile_img" src="/res/img/user/${loginUser.i_user}/${loginUser.profile_img}">
                    <div id="delProfileBtnContainer">
                        <button class="basic_img_select" onclick="delProfileImg();">기본이미지 사용</button>
                    </div>
                </c:if>
                <c:if test="${loginUser.profile_img == null}">
                    <img id="user_profile_img" class="profile_img" src="/res/img/1234.png">
                </c:if>
            </div>
            <div>
	            <button class="file_select_btn" type="button" onclick="$('.profile_file').trigger( 'click' )">파일선택</button>
	            <input class="profile_file" type="file" id="inputImg" multiple accept="image/*">
	            <input class="upload_input" type="button" value="업로드" onclick="uploadImg()">
            </div>
        </div>
    
    	<div class="div_construction">
    		<div class="div_shape">별명</div>
    		<div>돌멩이</div>
    	</div>
    	<div class="div_construction">
    		<div class="div_shape">이름</div>
    		<div>${loginUser.user_nm}</div>
    	</div>
    	<div class="div_construction">
    		<div class="div_shape">유저아이디</div>
    		<div>${loginUser.id_email}</div>
    	</div>
    	<div class="div_construction">
    		<div class="div_shape">유저비밀번호</div>
    		<div>
    			<input type="password" id="user_pw" name="user_pw" placeholder="현재 비밀번호" >
           	 	<input class="input_btn" type="button" value="비밀번호 변경" onclick="clkPwPop(${loginUser.i_user},'${loginUser.code}')">
    		</div>
    	</div>
    	<div class="div_construction">
    		<div class="div_shape">핸드폰번호</div>
    		<div>
    			<input type="text" id="ph" placeholder="Your Phone Number" value="${loginUser.ph}">
            	<button class="input_btn" onclick="chPh()">핸드폰번호 변경</button>
    		</div>
    	</div>
    	<div class="div_construction">
    		<div class="div_shape">주소</div>
    		<div class="addr_div">
    			<input type="text" id="postcode" value="${loginUser.postcode}"placeholder="우편번호">
    			<input class="input_btn" type="button" onclick="execDaumPostcode()" value="우편번호 찾기"><br>
    			<input type="text" id="roadAddress" value="${loginUser.roadAddr}"placeholder="도로명주소">
    			<span id="guide" style="color:#999;display:none"></span>
    			<input type="text" id="jibunAddress" value="${loginUser.jibunAddr}" placeholder="지번주소">
                <input type="text" id="detailAddress" value="${loginUser.detailAddr}"placeholder="상세주소">
                <input type="text" id="extraAddress" value="${loginUser.extraAddr}"placeholder="참고항목">
                <input class="input_btn" type="button" value="주소변경" onclick="chAddr()">
    		</div>
    	</div>
    </div>
</div>
</div>

<script src="/res/js/user/modAccount.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>