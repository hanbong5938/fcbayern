package com.football.fcbayern.service;

import com.football.fcbayern.model.ProfileAttachModel;

import java.util.List;

public interface ProfileAttachService {

    int insert(ProfileAttachModel profileAttachModel);

    List<ProfileAttachModel> getAttachList();
}
