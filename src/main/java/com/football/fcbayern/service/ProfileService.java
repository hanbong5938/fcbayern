package com.football.fcbayern.service;

import com.football.fcbayern.model.ProfileCategoryModel;
import com.football.fcbayern.model.ProfileModel;

import java.util.List;

public interface ProfileService {
    int insert(ProfileModel profileModel);

    List<ProfileCategoryModel> category();

    List<ProfileModel> infoList();
}
