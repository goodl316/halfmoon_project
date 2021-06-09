package com.halfmoon.market.sale;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.common.Utils;
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
    
    int updProductState(ProductSaleDTO dto) {
 	   return mapper.updProductState(dto);
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
    

    // 임시 상품 이미지 업로드 (return img name map)
    public List<String> tempImgUpload(MultipartFile[] imgs) {
        List<String> list = new ArrayList<>();
        if(imgs.length > 5 || imgs.length == 0) {
            return null;
        }
        UserDomain vo = (UserDomain) hs.getAttribute(Const.KEY_LOGINUSER);
        String folder = "/resources/img/sale/temp_" + vo.getI_user();
        try {
            for(int i=0; i<imgs.length; i++) {
                MultipartFile file = imgs[i];
                String fileNm = fUtils.saveFile(file, folder);
                if(fileNm == null) {
                    return null;
                }
                System.out.println("img nm : " + fileNm);
                list.add(fileNm);
            }
        } catch(Exception e) {
            System.out.println(e);
            return null;
        }
        return list;
    }

    // 상품 디테일 이미지 리스트 가져오기
    public List<String> selDetailImgList(int i_product) {
        String folder = "/resources/img/sale/p_" + i_product;
        String path = fUtils.getBasePath(folder);
        return fUtils.getFileNameList(path);
    }

    // 수정 이미지 삭제
    public int delSaleModImg(String path) {
        if(fUtils.delFile(path)) {
            return 1;
        }
        return 0;
    }


    //상품삭제
    int delSaleProduct(ProductSaleDTO dto) {
        return mapper.delSaleProduct(dto);
    }

    //상품수정뿌리기
    ProductSaleDomain selModProduct(ProductSaleDTO dto) {
        return mapper.selModProduct(dto);
    }

    // 상품수
    int modProduct(ProductSaleDTO dto) {
        return mapper.modProduct(dto);
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
    	List<CmtDomain> list = mapper.selCmt(dto);
    		for(int i = 0; i<list.size(); i++) {
    			list.get(i).setShow_time(Utils.timeFormatter(list.get(i).getShow_time()));
    		}
    	
    	return list;
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
    	System.out.println("!!!" + dto.getI_cmt_cmt());
    	System.out.println("!!!" + dto.getI_cmt());
    	int result = mapper.delCmtCmt(dto);
    	return result;
    }
    
    public List<ProductSaleDomain> selTypeList(ProductSaleDTO dto){
    	List<ProductSaleDomain> list = mapper.selTypeList(dto);
    	for(int i=0; i<list.size(); i++) {
    		System.out.println(list.get(i).getI_product_type()-1);
    		list.get(i).setShow_title(Const.titleArr[list.get(i).getI_product_type()-1]);
    		list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc() - 1]);
    	}
    	return list;
    }
    List<ProductSaleDomain> selTypeSubList(ProductSaleDTO dto){
    	List<ProductSaleDomain> list = mapper.selTypeSubList(dto);
    	for(int i=0; i<list.size(); i++) {
    		list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc() - 1]);
    	}
    	return list;
    }
    
    List<ProductSaleDomain> selProductListSort(ProductSaleDTO dto){
    	List<ProductSaleDomain> list = mapper.selProductListSort(dto);
    	for(int i=0; i<list.size(); i++) {
    		System.out.println("i_product_type:"+list.get(i).getI_product_type());
    		list.get(i).setShow_title(Const.titleArr[list.get(i).getI_product_type()-1]);
    		list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc()-1]);
    	}
    	return list;
    }
    List<ProductSaleDomain> selProductSubListSort(ProductSaleDTO dto){
    	List<ProductSaleDomain> list = mapper.selProductSubListSort(dto);
    	for(int i=0; i<list.size(); i++) {
    		list.get(i).setShow_loc(Const.locArr[list.get(i).getI_loc()-1]);
    	}
    	return list;
    }
}
