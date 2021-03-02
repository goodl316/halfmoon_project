package com.halfmoon.market.sale;

import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SaleMapper {
    List<LocDomain> selLoc();
    int regProduct(ProductSaleDTO dto);



}
