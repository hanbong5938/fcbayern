package com.football.fcbayern.service;

import com.football.fcbayern.mapper.ProfileMapper;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

@Service
public class ProfileServiceImpl implements ProfileService {

    private ProfileMapper profileMapper;


//    @Autowired
//    public void setProfileMapper(ProfileMapper profileMapper) {
//        this.profileMapper = profileMapper;
//    }

    @Override
    public void insertImg(MultipartFile[] multipartFiles) throws Exception {

    }
}
