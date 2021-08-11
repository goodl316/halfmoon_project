<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/res/css/user/changeId_Pw.css?ver=1">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script defer src="/res/js/user/findUser.js?ver=5"></script>
<body>
	<div id="findCont">
		<div id="find_div">
			<button id="findId">아이디 찾기</button>
			<span class="span">|</span>
			<button id="findPw">비밀번호 찾기</button>
		</div>
	</div>

	<div class="find_main_cont">
		<c:if test="${param.state==1}">
			<div class="findId_main">
				아이디 찾기 <span class="info_input">01.정보 입력</span> <span class="next">></span>
				<span class="info_check">02.아이디 확인</span>
			</div>
			<div class="findId_cont1">
				<div class="findId_div">
					<div class="findId_info1">회원정보에 등록한 휴대전화로 인증</div>
					<div class="findId_info2">회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야
						인증이 가능합니다.</div>
					<div class="findId_user_nm">
						이름 <input class = "UserNm"type="text" placeholder="이름">
					</div>
					<div class="findId_user_ph">
						휴대전화 <input class="UserPh" type="text" placeholder="-를 제외한 숫자만 입력해주십시오.">
					</div>
				</div>
				<div class="findId_next">
					<button onclick="nextfindId(2)">다음</button>
				</div>
			</div>
		</c:if>
		<c:if test="${param.state==2 }">
			<div class="findId_cont2">

				<div class="findId_div">
					<div class="findId_info3">고객님의 정보와 일치하는 아이디 목록입니다.</div>
					<div class="findId_main_info">
						<span class="id_info">${loginUser.id_email}</span> <span
							class="join_date">가입일 : ${loginUser.show_time}</span>
					</div>
				</div>
				<div class="findId_next_btn">
					<button class="login_btn" onclick="loginBtn()">로그인하기</button>
					<button class="findPw_btn">비밀번호 찾기</button>
				</div>
			</div>
		</c:if>
	</div>
	
	<div class="find_main_cont">
	<c:if test="${param.state==3}">
		<div class="findPw_main">
			비밀번호 찾기 <span class="id_input">01.아이디 입력</span> <span
				class="pw_next1">></span> <span class="email_check">02.이메일 본인
				인증</span> <span class="pw_next2">></span> <span class="pw_reset1">03.비밀번호
				재설정</span>
		</div>
		<div class="findPw_cont1">
			<div class="findPw_div">
				<div class="findPw_info1">비밀번호를 찾고자 하는 아이디를 입력해 주세요.</div>
				<input class="findPw_input" type="text" placeholder="이메일 아이디">
			</div>
			<div class="findPw_next">
				<button onclick="nextPw(4)">다음</button>
			</div>
		</div>
		</c:if>
		<c:if test="${param.state==4 }">
		<div class="findPw_cont2">
			<div class="findPw_div">
				<div class="findPw_info2">회원정보에 등록한 이메일로 인증</div>
				<div class="findPw_info3">회원정보에 등록한 이메일주소와 입력한 이메일주소가 같아야 인증
					번호를 받을 수 있습니다.</div>
				<div class="findPw_user_nm">
					이름 <input  class="find_user_nm" type="text" placeholder="이름">
				</div>
				<div class="findPw_user_email">
					이메일 <input class="findPw_email" type="text"
						placeholder="id_email">
					<button onclick="sendCode()">인증번호 받기</button>
					<input class="check_code" type="text" placeholder="인증번호 6자리 숫자 입력">
				</div>
			</div>
			<div class="findPw_next">
				<button onclick="chkCode(5)">다음</button>
			</div>
		</div>
		</c:if>
		<c:if test="${param.state==5 }">
		<div class="findPw_cont3">
			<div class="findPw_div">
				<div class="pw_reSet">비밀번호 재설정</div>
				<div class="user_id"></div>
				<div class="new_pw">
					<input id="userPw" type="password" placeholder="새 비밀번호"> <input
						id="chkUserPw" type="password" placeholder="새 비밀번호 확인">
				</div>
			</div>
			<div class="findPw_next">
				<button id="chPwbtn" onclick="chPw('${param.code}')">변경</button>
			</div>
		</div>
		</c:if>
	</div>
</body>
</html>

