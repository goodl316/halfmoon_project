<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<link rel="stylesheet" href="/res/css/sale/typeList.css">
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
			<div id="item_cont">
			<c:forEach items="${list}" var="item">
				<div class="item_box"
					onclick="moveDetail(${item.i_product}, ${item.i_user});">
					<div class="item_img">
						<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
					</div>
					<div class="item_info_cont">
						<div class="item_name">${item.title}</div>
						<div class="item_price_date">
							<div class="item_price">${item.p_price }</div>
							<div class="item_date">2021-08-21</div>
						</div>
						<div class="item_star_review">
							<div class="item_star_img">
								<img alt="" src="/res/img/star.png">4.6
							</div>
							<div class="item_review">댓글 1200</div>
						</div>
						<div class="item_loc">
							<img alt="" src="/res/img/i_loc.png"> 달서구
						</div>
					</div>
				</div>
			</c:forEach>
			</div>

		</div>
	</div>
</div>

<script defer src="/res/js/sale/typeList.js?ver=4"></script>

