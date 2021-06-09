package com.halfmoon.market.sale;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.halfmoon.market.common.Const;
import com.halfmoon.market.common.FileUtils;
import com.halfmoon.market.common.SecurityUtils;
import com.halfmoon.market.common.Utils;
import com.halfmoon.market.model.domain.CmtCmtDomain;
import com.halfmoon.market.model.domain.CmtDomain;
import com.halfmoon.market.model.domain.ProductSaleDomain;
import com.halfmoon.market.model.domain.UserDomain;
import com.halfmoon.market.model.dto.CmtCmtDTO;
import com.halfmoon.market.model.dto.CmtDTO;
import com.halfmoon.market.model.dto.ProductSaleDTO;

@Controller
public class SaleController {

    @Autowired
    HttpSession hs;

    @Autowired
    SaleService service;
    
    @Autowired
    FileUtils fUtils;

    @GetMapping("/sale/regProduct")
    public void regProduct(Model model) {
        // 상품등록 위치선택 데이터 추가.
        model.addAttribute("loc", service.selLoc());
    }

    // ajax 처리. 이유 : 접근제어
    @ResponseBody
    @GetMapping("/regProduct")
    public Map<String,Object> accessRegProduct() {
        Map<String,Object> val = new HashMap<String, Object>();
        UserDomain vo = (UserDomain) hs.getAttribute(Const.KEY_LOGINUSER);
        // 비로그인 접근 제어
        if (vo == null) {
            val.put(Const.KEY_RESULT, 0);
            return val;
        }
        val.put(Const.KEY_RESULT, 1);
        return val;
    }


    // 상품 이미지 등록 : 상품정보등록 성공 후 해당 ajax 호
    @ResponseBody
    @PostMapping("/productImgUpload")
    public int profileUpload(MultipartFile[] imgs, int i_product) {
        //System.out.println("imgs : " + imgs.length);
        //System.out.println("rec i_product : " + i_product);
        return service.profileUpload(imgs, i_product);   // service 파일 업로드 로직 처리하기.
    }
    // 상품 정보 등록
    @ResponseBody
    @PostMapping("/regProductProc")
    public Map<String, Object> regProductProc(@RequestBody ProductSaleDTO dto) {
        Map<String,Object> val = new HashMap<String, Object>();
        // 결과 처리
        val.put(Const.KEY_RESULT, service.regProduct(dto));
        System.out.println("i_product : " + dto.getI_product());
        // pk 값 전달
        val.put("i_product", dto.getI_product());
        return val;
    }
    //상품 디테일 페이지
    @GetMapping("/sale/detail")
    public void saleDetail(Model model, int i_product, int i_user) {
        ProductSaleDTO dto = new ProductSaleDTO();
        dto.setI_product(i_product);
        dto.setI_user(i_user);
       
        service.updHits(dto);

        // 상품 기본 유저 정보 추가
        model.addAttribute("user_basic", service.selProUser(dto));
        dto.setI_user(SecurityUtils.getUserPk(hs));
       
      
        // 상품 데이터 추가
        ProductSaleDomain vo = service.selProduct(dto);
        vo.setShow_time(Utils.timeFormatter(vo.getShow_time()));
        model.addAttribute(Const.KEY_DATA, vo);
        
    }

    //판매중, 판매완료
    @PostMapping("/sale/updState")
    @ResponseBody
    public Map<String, Object> saleDetailUpdState(@RequestBody ProductSaleDTO dto) {
    	System.out.println("asdsad"+dto.getI_product());
    	Map<String, Object> val = new HashMap<>();
    	service.updProductState(dto);
    	val.put(Const.KEY_RESULT, 1);
    	return val;
    }
    
    // 상품삭제 및 수정 (마이프로필페이지에서 이루어짐)
    // 상품삭제
    @ResponseBody
    @GetMapping("/sale/delSale")
    public Map<String, Object> delSaleProduct(int i_product) {
        Map<String, Object> val = new HashMap<>();
        if (!SecurityUtils.isLogin(hs)) {
            val.put(Const.KEY_RESULT, 0);
            return val;
        }
        ProductSaleDTO dto = new ProductSaleDTO();
        dto.setI_user(SecurityUtils.getUserPk(hs));
        dto.setI_product(i_product);
        // 폴더삭제
        String path = "/img/sale/p_" + i_product;
        if (fUtils.delFolder(path)) {
            System.out.println("삭제성공.");
        } else {
            System.out.println("삭제실패 : 에러처리 Todo");
            val.put(Const.KEY_RESULT, 0);
            return val;
        }
        val.put(Const.KEY_RESULT, service.delSaleProduct(dto));
        return val;
    }

    // 상품수정
    @GetMapping("/sale/modProduct")
    public void modSaleProduct(Model model, int i_product) {
        UserDomain loginUser = (UserDomain) hs.getAttribute(Const.KEY_LOGINUSER);
        // 비로그인 접근 제어
        if (loginUser == null) {
            // 접근 제어 처리.
        }

        // 상품등록 위치선택 데이터 추가.
        model.addAttribute("loc", service.selLoc());

        // 상품 이미지 리스트 가져오기.
        model.addAttribute("mod_img_list", service.selDetailImgList(i_product));
        //System.out.println(service.selDetailImgList(i_product).toString());

        ProductSaleDTO dto = new ProductSaleDTO();
        dto.setI_user(SecurityUtils.getUserPk(hs));
        dto.setI_product(i_product);


        ProductSaleDomain vo = service.selModProduct(dto);
        System.out.println("product img : " + vo.getP_img_main());
        // tag '#' replace " "
        if (vo.getTag() != null) {
            vo.setTag(vo.getTag().replaceAll("#", " "));
        }
        model.addAttribute(Const.KEY_DATA, vo);
    }

    // 상품수정 proc
    @ResponseBody
    @PostMapping("/modProductProc")
    public Map<String, Object> modProductProc(@RequestBody ProductSaleDTO dto) {
        Map<String, Object> val = new HashMap<>();

        System.out.println("mod i_user : " + dto.getI_user());
        System.out.println("mod i_product : " + dto.getI_product());

        val.put(Const.KEY_RESULT, service.modProduct(dto));
        return val;
    }


    // 임시 이미지 등록 ajax
    @ResponseBody
    @PostMapping("/imgTempUpload")
    public Map<String, Object> imgTempUpload(MultipartFile[] imgs) {
        Map<String, Object> val = new HashMap<>();
        val.put("imgs", service.tempImgUpload(imgs));
        return val;
    }

    // 수정 이미지 삭제
    @ResponseBody
    @GetMapping("/imgModDelete")
    public Map<String, Object> imgModDelete(Integer i_product, String imgNm) {
        Map<String, Object> val = new HashMap<>();
        String path = "/img/sale/p_" + i_product + "/" + imgNm;
        val.put(Const.KEY_RESULT, service.delSaleModImg(path));
        return val;
    }

    
    
    @PostMapping("/sale/favoriteAjax")
    @ResponseBody
    public Map<String,Object> favorite(@RequestBody ProductSaleDTO dto) {
    	
    	dto.setI_user(SecurityUtils.getUserPk(hs));
    	System.out.println("loginUser:"+dto.getI_user());
    	System.out.println("favorite :"+dto.getI_product());
    	System.out.println("toggle:"+dto.getToggle());
    	
    	Map<String, Object> val = new HashMap<String,Object>();
    	if(dto.getToggle()==0) {
    		System.out.println("00000");
    		val.put(Const.KEY_RESULT, service.delFavorite(dto));
    	}
    	else{
    		System.out.println("11111");
    		val.put(Const.KEY_RESULT, service.insFavorite(dto));
    	}
    	
    	return val;
    }
    
    //====================댓글 작업==============================
    
    @GetMapping("/sale/cmtList")
    @ResponseBody
    public List<CmtDomain> selCmt(Model model,CmtDTO dto){
    	List<CmtDomain> list = service.selCmt(dto);
    	for(CmtDomain vo : list) {
    		System.out.println("isSecret : " + vo.getIsSecret());
    	}
    	return list;
    }
  
    @PostMapping("/sale/insCmt")
    @ResponseBody
    public Map<String, Object> insCmt(@RequestBody CmtDTO dto) {
    	System.out.println("isSecret : " + dto.getIsSecret());
    	System.out.println(dto.getI_product());
    	Map<String, Object> val  = new HashMap<String, Object>();
    	val.put(Const.KEY_RESULT, service.insCmt(dto));
    	return val;
    }
    @PostMapping("/sale/delCmt")
    @ResponseBody
    public Map<String, Object> delCmt(@RequestBody CmtDTO dto) {
    	System.out.println(dto.getI_product());
    	Map<String, Object> val  = new HashMap<String, Object>();
    	val.put(Const.KEY_RESULT, service.delCmt(dto));
    	return val;
    }
    
  //====================대댓글 작업==============================
    @GetMapping("/sale/cmtcmtList")
    @ResponseBody
    public List<CmtCmtDomain> selCmtCmt(Model model, CmtCmtDTO dto){
    	System.out.println(dto.getI_cmt());
    	return service.selCmtCmt(dto);
    }
    
    
    @PostMapping("/sale/insCmt_cmt")
    @ResponseBody
    public Map<String,Object> insCmtcmt(@RequestBody CmtCmtDTO dto){
    	Map<String,Object> val = new HashMap<String, Object>();
    	val.put(Const.KEY_RESULT, service.insCmtcmt(dto));
    	return val;
    }
    
    @PostMapping("/sale/delCmtCmt")
    @ResponseBody
    public Map<String,Object> delCmtCmt(@RequestBody CmtCmtDTO dto){
    	System.out.println(dto.getI_cmt());
    	System.out.println(dto.getI_cmt_cmt());
    	Map<String,Object> val = new HashMap<String, Object>();
    	val.put(Const.KEY_RESULT, service.delCmtCmt(dto));
    	return val;
    }
    
    //==================항목별 리스트 작업=========================
   
    @GetMapping("/sale/typeList")
    public void ProductTypeList(Model model, int i_product_type){
    	ProductSaleDTO dto = new ProductSaleDTO();
    	dto.setI_product_type(i_product_type);
    	System.out.println("i_product_type:"+dto.getI_product_type());
    	
    	model.addAttribute(Const.KEY_LIST,service.selTypeList(dto));
    }
    @GetMapping("/sale/typeSubList")
    public void ProductTypeSubList(Model model,String type_sub_title){
    	ProductSaleDTO dto = new ProductSaleDTO();
    	dto.setType_sub_title(type_sub_title);
    	System.out.println("type_sub_title:" + dto.getType_sub_title());
    	
    	model.addAttribute(Const.KEY_LIST,service.selTypeSubList(dto));
    }
    @GetMapping("/sale/typeListSort")
    public void ProductTypeListSort(Model model,int i_product_type, int sortState) {
    	System.out.println("sortState:"+sortState);
    	System.out.println("i_product_type:"+i_product_type);
    	ProductSaleDTO dto = new ProductSaleDTO();
    	dto.setI_product_type(i_product_type);
    	dto.setSortState(sortState);
    	System.out.println(dto.getSortState());
    	
    	model.addAttribute(Const.KEY_LIST, service.selProductListSort(dto));
    }
    
    @GetMapping("/sale/typeSubListSort")
    public void ProductTypeSubListSort(Model model,String type_sub_title, int sortState) {
    	System.out.println("sortState:"+sortState);
    	ProductSaleDTO dto = new ProductSaleDTO();
    	dto.setType_sub_title(type_sub_title);
    	dto.setSortState(sortState);
    	System.out.println(dto.getSortState());
    	
    	model.addAttribute(Const.KEY_LIST, service.selProductSubListSort(dto));
    }
}
