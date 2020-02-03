package com.football.fcbayern.controller;

import com.football.fcbayern.model.ProfileCategoryModel;
import com.football.fcbayern.model.ProfileModel;
import com.football.fcbayern.service.ProfileService;
import com.football.fcbayern.util.AwsS3Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/profile")
@RestController
public class ProfileController {

    private ProfileService profileService;
    private AwsS3Util awsS3Util = new AwsS3Util();
    private final static String bucketName = "woolution";

    @Autowired
    public void setProfileService(ProfileService profileService) {
        this.profileService = profileService;
    }


    @PostMapping(value = "/insertInfo", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> insertInfo(@RequestBody ProfileModel profileModel) {
        int count = profileService.insert(profileModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/category", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ProfileCategoryModel>> category() {
        return new ResponseEntity<>(profileService.category(), HttpStatus.OK);
    }

    @GetMapping(value = "/infoList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ProfileModel>> infoList(){
        return new ResponseEntity<>(profileService.infoList(), HttpStatus.OK);
    }

}
