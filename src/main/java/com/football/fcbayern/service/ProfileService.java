package com.football.fcbayern.service;

import com.football.fcbayern.model.ProfileAttachModel;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProfileService {
    void insertImg(ProfileAttachModel profileAttachModel);

}