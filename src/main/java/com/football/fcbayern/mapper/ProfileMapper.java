package com.football.fcbayern.mapper;

import com.football.fcbayern.model.ProfileAttachModel;
import org.springframework.web.multipart.MultipartFile;

public interface ProfileMapper {

    void insertImg(ProfileAttachModel profileAttachModel);

}
