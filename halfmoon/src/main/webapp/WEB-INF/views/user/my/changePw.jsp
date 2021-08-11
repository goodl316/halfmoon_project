<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
      <link rel="stylesheet" href="/res/css/user/changeId_Pw.css?ver=1">
      <script defer src="/res/js/user/modAccount.js"></script>
<body>
	<div class="findPw_cont3">
		<div class="findPw_div">
			<div class="pw_reSet">
				비밀번호 재설정
			</div>
			<div class="user_id">
			</div>
			<div class="new_pw">
				<input id="userPw" type="password" placeholder="새 비밀번호">
				<input id="chkUserPw" type="password" placeholder="새 비밀번호 확인">
			</div>
		</div>
		<div class="findPw_next">
			<button id="chPwbtn" onclick="chPw(${loginUser.i_user})">변경</button>
		</div>
	</div>
</body>
</html>

