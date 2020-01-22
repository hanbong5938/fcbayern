package com.football.fcbayern.controller;

import com.football.fcbayern.model.ProfileAttachModel;
import com.football.fcbayern.service.ProfileService;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.util.*;

@RequestMapping("/profile")
@RestController
public class ProfileController {

    private ProfileService profileService;
//    private AwsS3Util awsS3Util = new AwsS3Util();
//    private String bucketName = "woolution";

    @Autowired
    public void setProfileService(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String uploadAjaxCertificate(MultipartFile uploadFile) throws Exception {

        String uploadPath = "woolution/profileAttach";
        System.out.println(uploadFile);
        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);
        String returnPath = (String) img_path.getBody();

        return returnPath;
    }


}
