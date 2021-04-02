package com.halfmoon.market.sale;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.model.domain.CmtCmtDomain;
import com.halfmoon.market.model.domain.CmtDomain;
import com.halfmoon.market.model.domain.LocDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.CmtCmtDTO;
import com.halfmoon.market.model.dto.CmtDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;

@Service
public class SaleService {

    @Autowired
    SaleMapper mapper;

    @Autowired
    FileUtils fUtils;
    @Autowired
    HttpSession hs;

    List<LocDomain> selLoc() {
        return mapper.selLoc();
    }
    
    public List<ProductSaleDomain> selProductList(ProductSaleDTO p){
    	p.setI_user(SecurityUtils.getUserPk(hs));
    	return mapper.selProductList(p);
    }

    int regProduct(ProductSaleDTO dto) {
        return mapper.regProduct(dto);
    }

    ProductSaleDomain selProduct(ProductSaleDTO dto) {
    	ProductSaleDomain vo = mapper.selProduct(dto);
    	System.out.println(vo.getI_loc());
    	vo.setShow_loc(Const.locArr[vo.getI_loc() - 1]);
        return vo;
    }

    UserDomain selProUser(ProductSaleDTO dto) {
        return mapper.selProUser(dto);
    }


    //이미지 업로드
    public int profileUpload(MultipartFile[] imgs, int i_product) {
        if(imgs.length > 5 || imgs.length == 0) {
            return 0;
        }
        String folder = "/resources/img/sale/p_" + i_product;
        try {
            for(int i=0; i<imgs.length; i++) {
                MultipartFile file = imgs[i];
                String fileNm = fUtils.saveFile(file, folder);
                if(fileNm == null) {
                    return 0;
                }
                if(i==0) { //메인 이미지 업데이트
                    ProductSaleDTO dto = new ProductSaleDTO();
                    dto.setP_img_main(fileNm);
                    dto.setI_product(i_product);
                    mapper.upsMainImg(dto);
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
            return 0;
        }
        return 1;
    }

    
    
    public int insFavorite(ProductSaleDTO p) {
    	return mapper.insFavorite(p);
    }
    
    public int delFavorite(ProductSaleDTO p) {
    	return mapper.delFavorite(p);
    }
    
    public int updHits(ProductSaleDTO p) {
    	return mapper.updHits(p);
    }
    
    List<CmtDomain> selCmt(CmtDTO dto) {
    	return mapper.selCmt(dto);
    }
    
    public int insCmt(CmtDTO dto) {
   // 	ProductSaleDTO vo = new ProductSaleDTO();
    //	p.setI_product(vo.getI_product());
    	dto.setI_user(SecurityUtils.getUserPk(hs));
    	int result = mapper.insCmt(dto);
    	return result;
    }
    
    public int delCmt(CmtDTO dto) {
    	dto.setI_user(SecurityUtils.getUserPk(hs));
    	int result = mapper.delCmt(dto);
    	return result;
    }
    
    List<CmtCmtDomain> selCmtCmt(CmtCmtDTO dto){
    	return mapper.selCmtcmt(dto);
    }
    
    public int insCmtcmt(CmtCmtDTO dto) {
    	int result = mapper.insCmtcmt(dto);
    	return result;
    }
    
    public int delCmtCmt(CmtCmtDTO dto) {
    	int result = mapper.delCmtCmt(dto);
    	return result;
    }
}
