<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<c:forEach var="tmp" items="${clist }">
	<c:choose>
		<c:when test="${sessionScope.nick ne tmp.send_nick }">
		<div class="incoming_msg">
			<div class="incoming_msg_img">
				<a href="other_profile.do?other_nick=${tmp.send_nick }">
					<img src=".upload/profile/${tmp.profile}" alt="보낸사람 프로필">
				</a>
			</div>
			<div class="received_msg">
				<div class="received_withd_msg">
					<p>${tmp.content }</p>
					<span class="time_data">${tmp.send_time }</span>
				</div>
			</div>
		</div>
		</c:when>
		
		<c:otherwise>
			<div class="sent_msg">
				<p>${tmp.content }</p>
				<span class="time_data"> ${tmp.send_time }</span>
			</div>
		</c:otherwise>
	
	</c:choose>
</c:forEach>