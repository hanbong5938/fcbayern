package com.football.fcbayern.controller;

import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/boardAttach")
public class BoardAttachController {


    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "boardAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }


}
