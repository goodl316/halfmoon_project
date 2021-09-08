<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:forEach var="tmp" items="${list }">
	<div class="chat_list_box${tmp.room}">
		<div type="button" class="chat_list" room="${tmp.room}" other-nick="${tmp.other_nick}">
			<div class="chat_people">
				<div class="chat_img">
					<a href="otehr_profile.do?other_nick=${tmp.other_nick}">
						<img src="./upload/profile/${tmp.profile_img}" alt="sunil">
					</a>
				</div>
				<div class="chat_ib">
					<h5>${tmp.other_nick }<span class="chat_data">${tmp.send_time}</span>
					</h5>
					<div class="row">
						<div class="col-10">
							<p>${tmp.content}</p>
						</div>
						<c:if test="${tmp.unread>0 }">
							<div class="col-2 unread${tmp.room}">
								<span class="badge bg-danger">${tmp.unread}</span>
							</div>
						</c:if>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</c:forEach>