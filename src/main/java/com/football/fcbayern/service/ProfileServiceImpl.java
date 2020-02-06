package com.football.fcbayern.service;

import com.football.fcbayern.mapper.ProfileMapper;
import com.football.fcbayern.model.ProfileAttachModel;
import com.football.fcbayern.model.ProfileCategoryModel;
import com.football.fcbayern.model.ProfileModel;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private ProfileMapper profileMapper;

    @Override
    public int insert(ProfileModel profileModel) {
        return profileMapper.insert(profileModel);
    }

    @Override
    public List<ProfileCategoryModel> category() {
        return profileMapper.category();
    }

    @Override
    public List<ProfileModel> infoList() {
        return profileMapper.infoList();
    }
}
