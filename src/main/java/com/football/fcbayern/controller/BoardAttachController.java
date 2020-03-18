package com.football.fcbayern.controller;

import com.football.fcbayern.model.BoardAttachModel;
import com.football.fcbayern.service.BoardAttachService;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/boardAttach")
public class BoardAttachController {

    private BoardAttachService boardAttachService;

    @Autowired
    public void setBoardAttachService(BoardAttachService boardAttachService) {
        this.boardAttachService = boardAttachService;
    }

    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "boardAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }

    @GetMapping(value = "/getInfo/{boardNo}")
    public ResponseEntity<BoardAttachModel> getInfo(@PathVariable int boardNo) {
        return new ResponseEntity<>(boardAttachService.getInfo(boardNo), HttpStatus.OK);
    }


}
