package com.football.fcbayern.mapper;

import com.football.fcbayern.model.ProfileCategoryModel;
import com.football.fcbayern.model.ProfileModel;

import java.util.List;

public interface ProfileMapper {

    int insert(ProfileModel profileModel);

    List<ProfileCategoryModel> category();

}
