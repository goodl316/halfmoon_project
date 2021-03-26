package com.halfmoon.market.common;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUtils {
	
	@Autowired
	private ServletContext ctx;
	
	//베이스 경로 리턴
	public String getBasePath(String more) {
		return ctx.getRealPath(more);
	}
	
	//경로 폴더 만들기
	public void makeDirectories(String path) {
		File file = new File(path);
		if(!file.exists()) {
			file.mkdirs();
		}
	}
	
	//확장자 리턴
	public String getExt(String fileNm) {
		//return FilenameUtils.getExtension(fileNm);
		return fileNm.substring(fileNm.lastIndexOf(".") + 1);
	}
	
	public String getRandomFileNm() {
		return UUID.randomUUID().toString();
	}

	public String getRandomFileNm(String originalFileNm) {
		return getRandomFileNm() + "." + getExt(originalFileNm);
	}
	
	public String saveFile(MultipartFile mf, String folder) {
		String basePath = getBasePath(folder);
		makeDirectories(basePath);
		String fileNm = getRandomFileNm(mf.getOriginalFilename());
		try {
			File file = new File(basePath, fileNm);
			mf.transferTo(file);	// 파일 이동 저장. (중요)
		} catch(IOException e) {
			e.printStackTrace();
			return null;
		}
		return fileNm;
	}

	// 파일삭제
	public boolean delFile(String path) {
		String basePath = getBasePath("/resources");
		File file = new File(basePath, path);
		if(file.exists()) {
			return file.delete();
		}
		return false;
	}

	// 폴더삭제
	public boolean delFolder(String path) {
		String basePath = getBasePath("/resources");
		File folder = new File(basePath, path);
		if(folder.exists()) {
			File[] folder_list = folder.listFiles(); //파일리스트 얻어오기
			for (int i = 0; i < folder_list.length; i++) {
				folder_list[i].delete(); //파일 삭제
			}
			folder.delete(); //대상폴더 삭제
			return true;
		}
		return false;
	}


}







