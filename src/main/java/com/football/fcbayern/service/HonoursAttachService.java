package com.football.fcbayern.service;

import com.football.fcbayern.model.HonoursAttachModel;

import java.util.List;

public interface HonoursAttachService {

    int insertAttachInfo(HonoursAttachModel honoursAttachModel);

    List<HonoursAttachModel> getAttachList();
}
