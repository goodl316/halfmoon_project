<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<link rel="stylesheet" href="/res/css/sale/typeList.css?ver=1">
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<div>
	<div id="whole_div">
		<div id="left_div">
			<div>
				<ul>
					<li id="filter_li">
						<button>
							<div>높은가격순</div>
						</button>
						<button>
							<div>낮은가격순</div>
						</button>
						<button>
							<div>많은리뷰순</div>
						</button>
						<button>
							<div>최신순</div>
						</button>
						<button>
							<div>인기순</div>
						</button>
						<button>
							<div>판매순</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div id="right_div">
			<div id="right_title_info">
				<div id="title">${list[0].type_sub_title}</div> 
				<div id="kinds">인기순</div>
			</div>
			<div class="product_info_sub">
				<c:forEach var="item" items="${list}">
					<div class="product_cont" onclick="moveDetail(${item.i_product},${item.i_user})">
						<input type="hidden" id=i_product value="${item.i_product}">
						<div class="product_img_div">
							<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
						</div>
						<div class="product_info_cont">
							<div class="product_title">${item.title}</div>
							<div class="product_pt">
								<div class="price"><fmt:formatNumber value="${item.p_price}" pattern="#,###,###"/>원</div>
							</div>
							<div class="item_star_review">
								<div class="item_star_img">
									<img alt="" src="/res/img/star.png">4.6
								</div>
								<div class="item_review">댓글 ${item.cmt_count}</div>
							</div>
						</div>
						<div class="loc_time_div">
							<div class="loc"><img alt="" src="/res/img/i_loc.png">달서구</div>
							<div class="time">${item.show_time}</div>
						</div>
					</div>
				</c:forEach>
			</div>

		</div>
	</div>
</div>

<script defer src="/res/js/sale/typeList.js?ver=4"></script>

