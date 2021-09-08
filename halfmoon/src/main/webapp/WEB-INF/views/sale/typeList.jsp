<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<link rel="stylesheet" href="/res/css/sale/typeList.css?ver=3">
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<div>
	<div id="whole_div">
		<c:choose>
			<c:when
				test="${param.type_sub_title == null and param.i_product_type == null}">
				<div id="left_div">
					<div>
						<ul>
							<li id="filter_li">
								<button onclick="SearchList('${param.searchText}',1)">
									<div>높은가격순</div>
								</button>
								<button onclick="SearchList('${param.searchText}',2)">
									<div>낮은가격순</div>
								</button>
								<button onclick="SearchList('${param.searchText}',3)">
									<div>많은리뷰순</div>
								</button>
								<button onclick="SearchList('${param.searchText}',4)">
									<div>인기순</div>
								</button>
								<button onclick="SearchList('${param.searchText}',5)">
									<div>최신순</div>
								</button>
								<button>
									<div>판매순</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</c:when>
			<c:when test="${param.type_sub_title == null}">
				<div id="left_div">
					<div>
						<ul>
							<li id="filter_li">
								<button onclick="TypeList(${param.i_product_type},1)">
									<div>높은가격순</div>
								</button>
								<button onclick="TypeList(${param.i_product_type},2)">
									<div>낮은가격순</div>
								</button>
								<button onclick="TypeList(${param.i_product_type},3)">
									<div>많은리뷰순</div>
								</button>
								<button onclick="TypeList(${param.i_product_type},4)">
									<div>인기순</div>
								</button>
								<button onclick="TypeList(${param.i_product_type},5)">
									<div>최신순</div>
								</button>
								<button>
									<div>판매순</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</c:when>
			<c:when test="${param.i_product_type == null}">
				<div id="left_div">
					<div>
						<ul>
							<li id="filter_li">
								<button onclick="TypeSubList('${param.type_sub_title}',1)">
									<div>높은가격순</div>
								</button>

								<button onclick="TypeSubList('${param.type_sub_title}',2)">
									<div>낮은가격순</div>
								</button>
								<button onclick="TypeSubList('${param.type_sub_title}',3)">
									<div>많은리뷰순</div>
								</button>
								<button onclick="TypeSubList('${param.type_sub_title}',4)">
									<div>인기순</div>
								</button>
								<button onclick="TypeSubList('${param.type_sub_title}',5)">
									<div>최신순</div>
								</button>
								<button>
									<div>판매순</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</c:when>
		</c:choose>
		<div id="right_div">
			<div id="right_title_info">
				<div id="title">${list[0].show_title}</div>
				<c:choose>
					<c:when test="${param.sortState == 0 or param.sortState ==5 }">
					<div id="kinds">최신순</div>
					</c:when>
					<c:when test="${param.sortState == 1}">
					<div id="kinds">높은 가격순</div>
					</c:when>
					<c:when test="${param.sortState == 2 }">
					<div id="kinds">낮은 가격순</div>
					</c:when>
					<c:when test="${param.sortState == 3 }">
					<div id="kinds">많은 리뷰순</div>
					</c:when>
					<c:when test="${param.sortState == 4 }">
					<div id="kinds">인기순</div>
					</c:when>
				</c:choose>
			</div>

			<div class="product_info_sub">
				<c:forEach var="item" items="${list}">
					<c:if test="${item.state == 1}">
						<div class="product_cont"
							onclick="moveDetail(${item.i_product},${item.i_user},${item.i_product_type})">
							<input type="hidden" id=i_product value="${item.i_product}">
							<div class="product_img_div">
								<img src="/res/img/sale/p_${item.i_product}/${item.p_img_main}">
							</div>
							<div class="product_info_cont">
								<div class="product_title">${item.title}</div>
								<div class="product_pt">
									<div class="price">
										<fmt:formatNumber value="${item.p_price}" pattern="#,###,###" />
										원
									</div>
								</div>
								<div class="item_star_review">
									<div class="item_star_img">
										<img alt="" src="/res/img/star.png">4.6
									</div>
									<div class="item_review">댓글 ${item.cmt_count}</div>
									<div class="is_favorite">좋아요 ${item.is_favorite}</div>
								</div>

							</div>
							<div class="loc_time_div">
								<div class="loc">
									<img alt="" src="/res/img/i_loc.png">${item.show_loc}</div>
								<div class="time">${item.show_time}</div>
							</div>

						</div>
					</c:if>
				</c:forEach>
			</div>
			<div class="selectPage">
				<c:if test="${paging.startPage != 1 }">
					<c:choose>
						<c:when
							test="${param.i_product_type == null and param.type_sub_title == null}">
							<a
								onclick="movePageSearch(${paging.startPage},${paging.cntPerPage},'${param.searchText}',${param.sortState})">${p }</a>
						</c:when>
						<c:when test="${param.type_sub_title == null}">
							<a
								onclick="movePage(${paging.startPage},${paging.cntPerPage},${param.i_product_type},${param.sortState})">&lt;</a>
						</c:when>
						<c:when test="${param.i_product_type == null }">
							<a
								onclick="movePageSub(${paging.startPage},${paging.cntPerPage},'${param.type_sub_title}',${param.sortState})">${p }</a>
						</c:when>


					</c:choose>

				</c:if>
				<c:forEach begin="${paging.startPage }" end="${paging.endPage }"
					var="p">
					<c:choose>
						<c:when test="${p == paging.nowPage }">
							<b>${p}</b>
						</c:when>
						<c:when test="${p != paging.nowPage }">
							<c:choose>
								<c:when
									test="${param.type_sub_title == null and param.i_product_type == null}">
									<a
										onclick="movePage1Search(${p},${paging.cntPerPage},'${param.searchText}',${param.sortState})">${p}</a>
								</c:when>
								<c:when test="${param.type_sub_title == null}">
									<a
										onclick="movePage1(${p},${paging.cntPerPage},${param.i_product_type},${param.sortState})">${p}</a>
								</c:when>
								<c:when test="${param.i_product_type == null }">
									<a
										onclick="movePage1Sub(${p},${paging.cntPerPage},'${param.type_sub_title}',${param.sortState})">${p}</a>
								</c:when>

							</c:choose>
						</c:when>
					</c:choose>
				</c:forEach>
				<c:if test="${paging.endPage != paging.lastPage}">
					<c:choose>
						<c:when
							test="${param.type_sub_title == null and i_product_type == null }">
							<a
								onclick="movePage2Search(${paging.endPage},${paging.cntPerPage},'${param.type_sub_title}',${param.sortState})">&gt;</a>
						</c:when>
						<c:when test="${param.type_sub_title == null}">
							<a
								onclick="movePage2(${paging.endPage},${paging.cntPerPage},${param.i_product_type},${param.sortState})">&gt;</a>
						</c:when>
						<c:when test="${param.i_product_type == null }">
							<a
								onclick="movePage2Sub(${paging.endPage},${paging.cntPerPage},'${param.type_sub_title}',${param.sortState})">&gt;</a>
						</c:when>

					</c:choose>
				</c:if>

			</div>
		</div>
	</div>
</div>




<script defer src="/res/js/sale/typeList.js?ver=7"></script>