package com.football.fcbayern.mapper;

import com.football.fcbayern.model.ProfileAttachModel;

import java.util.List;

public interface ProfileAttachMapper {

    int insert(ProfileAttachModel profileAttachModel);

    List<ProfileAttachModel> getAttachList();
}
