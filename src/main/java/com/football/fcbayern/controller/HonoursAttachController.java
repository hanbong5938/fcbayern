package com.football.fcbayern.controller;

import com.football.fcbayern.model.HonoursAttachModel;
import com.football.fcbayern.service.HonoursAttachService;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/honoursAttach")
public class HonoursAttachController {

    private HonoursAttachService honoursAttachService;

    @Autowired
    public void setHonoursAttachService(HonoursAttachService honoursAttachService) {
        this.honoursAttachService = honoursAttachService;
    }

    @PostMapping(value = "/insertAttachInfo")
    public ResponseEntity<Integer> insertAttachInfo(HonoursAttachModel honoursAttachModel) {
        return new ResponseEntity<>(honoursAttachService.insertAttachInfo(honoursAttachModel), HttpStatus.OK);
    }

    @PostMapping(value = "/insertImg")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "honoursAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }

    @GetMapping(value = "/getAttachList")
    public ResponseEntity<List<HonoursAttachModel>> getAttachList() {
        return new ResponseEntity<>(honoursAttachService.getAttachList(), HttpStatus.OK);
    }

}
