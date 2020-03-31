package com.football.fcbayern.controller;

import com.football.fcbayern.model.HonoursAttachModel;
import com.football.fcbayern.model.IconAttachModel;
import com.football.fcbayern.model.ProfileAttachModel;
import com.football.fcbayern.service.IconShopAttachService;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/iconShopAttach")
public class IconShopAttachController {

    private IconShopAttachService iconShopAttachService;

    @Autowired
    public void setIconShopAttachService(IconShopAttachService iconShopAttachService) {
        this.iconShopAttachService = iconShopAttachService;
    }


    @PostMapping(value = "/insertAttachInfo")
    public ResponseEntity<Integer> insertAttachInfo(IconAttachModel iconAttachModel) {
        return new ResponseEntity<>(iconShopAttachService.insertAttachInfo(iconAttachModel), HttpStatus.OK);
    }

    @PostMapping(value = "/insertImg")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "iconShopAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);
        return img_path.getBody();
    }

    @GetMapping(value = "/getAttachInfo")
    public ResponseEntity<IconAttachModel> getAttachInfo(IconAttachModel iconAttachModel) {
        return new ResponseEntity<>(iconShopAttachService.getAttachInfo(iconAttachModel), HttpStatus.OK);
    }

    @GetMapping(value = "/getAttachImg/{iconNo}")
    public ResponseEntity<IconAttachModel> getAttachImg(@PathVariable int iconNo) {
        return new ResponseEntity<>(iconShopAttachService.getAttachImg(iconNo), HttpStatus.OK);
    }


}
