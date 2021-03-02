package com.halfmoon.market.sale;

import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.dto.ProductSaleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    SaleMapper mapper;

    List<LocDomain> selLoc() {
        return mapper.selLoc();
    }

    int regProduct(ProductSaleDTO dto) {
        return mapper.regProduct(dto);
    }


}
