<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div id="profile_right">
    <div id="profile_right_div1">
        <h3>내 계정 수정</h3>
    </div>
    <div id="profile_right_div2">
        <div id="Uprofile">
            <div id="proImgCont">
                <c:if test="${loginUser.profile_img != null}">
                    <img id="user_profile_img" class="profile_img" src="/res/img/user/${loginUser.i_user}/${loginUser.profile_img}">
                    <div id="delProfileBtnContainer">
                        <button onclick="delProfileImg();">기본이미지 사용</button>
                    </div>
                </c:if>
                <c:if test="${loginUser.profile_img == null}">
                    <img id="user_profile_img" class="profile_img" src="/res/img/1234.png">
                </c:if>
            </div>
            <button type="button" onclick="$('.profile_file').trigger( 'click' )">파일선택</button>
            <input class="profile_file" type="file" id="inputImg" multiple accept="image/*">
            <input type="button" value="업로드" onclick="uploadImg()">
        </div>
        <div>
            <span>아이디 </span>
            <span class="profile_id"> | </span>
            <span>${loginUser.id_email}</span>
        </div>
        <div>
            <span>비밀번호</span>
            <span class="profile_pw"> | </span>
            <input type="password" id="user_pw" name="user_pw" placeholder="현재 비밀번호" >
            <input type="button" value="비밀번호 변경" onclick="clkPwPop(${loginUser.i_user},'${loginUser.code}')">
        </div>
        <div>
            <span>이름</span>
            <span class="profile_nm"> | </span>
            <span>${loginUser.user_nm}</span>
        </div>
        <div>
            <span>핸드폰번호</span>
            <span class="profile_ph"> | </span>
            <input type="text" id="ph" placeholder="Your Phone Number" value="${loginUser.ph}">
            <button onclick="chPh()">핸드폰번호 변경</button>
        </div>
        <div id=Uaddress>
            주소
            <div id="daumAddrApi">
                <input type="text" id="postcode" value="${loginUser.postcode}"placeholder="우편번호">
                <input type="button" onclick="execDaumPostcode()" value="우편번호 찾기"><br>
                <input type="text" id="roadAddress" value="${loginUser.roadAddr}"placeholder="도로명주소">
                <input type="text" id="jibunAddress" value="${loginUser.jibunAddr}" placeholder="지번주소">
                <input type="text" id="detailAddress" value="${loginUser.detailAddr}"placeholder="상세주소">
                <input type="text" id="extraAddress" value="${loginUser.extraAddr}"placeholder="참고항목">
                <input type="button" value="주소변경" onclick="chAddr()">
            </div>
        </div>
    </div>
</div>
</div>
</div>
<script src="/res/js/user/modAccount.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>