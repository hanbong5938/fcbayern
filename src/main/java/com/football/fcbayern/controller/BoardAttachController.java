package com.football.fcbayern.controller;

import com.amazonaws.util.IOUtils;
import com.football.fcbayern.service.BoardService;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

@RestController
@RequestMapping(value = "/boardAttach")
public class BoardAttachController {

//    private BoardService boardService;
//
//    @Autowired
//    public void setBoardService(BoardService boardService) {
//        this.boardService = boardService;
//    }

    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "boardAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }


}
