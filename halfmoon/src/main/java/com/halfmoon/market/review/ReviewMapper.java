package com.halfmoon.market.review;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.BoardEntity;
import com.halfmoon.market.model.ProductReviewEntity;
import com.halfmoon.market.model.UserReviewEntity;

@Mapper
public interface ReviewMapper {
	
	//메서드 네이밍좀 추천해주세요...
	List<UserReviewEntity> selUreviewList();
	UserReviewEntity selUreview(UserReviewEntity p);
	int insUreview(UserReviewEntity p);
	int updUreview(UserReviewEntity p);
	int delUreview(UserReviewEntity p);
	
	//------------------Product Review------------------
	
	List<ProductReviewEntity> selPreviewList();
	BoardEntity selPreview(ProductReviewEntity p);
	int insPreview(ProductReviewEntity p);
	int updPreview(ProductReviewEntity p);
	int delPreview(ProductReviewEntity p);
}
