package com.halfmoon.market.sale;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.halfmoon.market.model.domain.CmtCmtDomain;
import com.halfmoon.market.model.domain.CmtDomain;
import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.CmtCmtDTO;
import com.halfmoon.market.model.dto.CmtDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;

@Mapper
public interface SaleMapper {
    List<LocDomain> selLoc();
    List<ProductSaleDomain> selProductList(ProductSaleDTO p);
    int regProduct(ProductSaleDTO dto);
    ProductSaleDomain selProduct(ProductSaleDTO dto);
    UserDomain selProUser(ProductSaleDTO dto);

    // 상품메인이미지업데이트
    int upsMainImg(ProductSaleDTO dto);
    // 좋아요
    int insFavorite(ProductSaleDTO dto);
    int delFavorite(ProductSaleDTO dto);
    // 조회수
    int updHits(ProductSaleDTO dto);
    //댓글
   List<CmtDomain> selCmt(CmtDTO dto);
    int insCmt(CmtDTO dto);
    int delCmt(CmtDTO dto);
    //대댓글
    List<CmtCmtDomain> selCmtcmt(CmtCmtDTO dto);
    int insCmtcmt(CmtCmtDTO dto);
    int delCmtCmt(CmtCmtDTO dto);

}
