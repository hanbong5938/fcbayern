package com.football.fcbayern.controller;

import com.amazonaws.util.IOUtils;
import com.football.fcbayern.model.ProfileAttachModel;
import com.football.fcbayern.service.ProfileAttachService;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@RequestMapping("/profileAttach")
@RestController
public class ProfileAttachController {

    private ProfileAttachService profileAttachService;

    @Autowired
    public void setProfileAttachService(ProfileAttachService profileAttachService) {
        this.profileAttachService = profileAttachService;
    }

    @PostMapping(value = "/insertAttachInfo", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> insertInfo(@RequestBody ProfileAttachModel profileAttachModel) {
        int count = profileAttachService.insert(profileAttachModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String insertImg(MultipartFile uploadFile) throws Exception {
        String uploadPath = "profileAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }

    @GetMapping(value = "/getAttachList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProfileAttachModel>> getAttachList(){
        return new ResponseEntity<>(profileAttachService.getAttachList(), HttpStatus.OK);
    }

}
