# halfmoon_project

//중고거래 사이트 웹개발 포트폴리오 halfmoon

//지역을 선택하여 중고거래 가능한 사이트입니다.

//기능 구현 영상 링크


//주요 사용 기술
- JAVA
- SPRING MVC
- HTML,CSS,JAVASCRIPT
- JSTL
- MYSQL
- SPRING JDBC
- HikarlCP
- Mybatis
- Jackson
- Tile3
- Java Mail

//기능구현
UserController
- 회원가입
- 로그인
- 마이페이지
- 내계정 정보 수정 (프로필사진,핸드폰 번호 변경, 비밀번호 변경, 주소 변경)
ProductController
- 구매 물품, 판매 물품
- 판매 물품 등록
- 등록중인 물품
- 판매중 물품 상세 정보 보기
- 판매중 물품 댓글,대댓글,좋아요,조회수
- 판매중 물품 수정,삭제
Security Util
- isLogin : 로그인 세션 체크
- getLoginUser : 세션의 유저 domain 객체 가져오기
- getLoginUserPk : 세션의 유저 PK값 가져오기
- getSalt : Salt 값 생성
- hashPW : 사용자 pw와 salt 값 해싱 암호화

