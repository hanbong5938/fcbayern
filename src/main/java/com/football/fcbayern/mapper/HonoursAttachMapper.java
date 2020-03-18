package com.football.fcbayern.mapper;

import com.football.fcbayern.model.HonoursAttachModel;

import java.util.List;

public interface HonoursAttachMapper {
    int insertAttachInfo(HonoursAttachModel honoursAttachModel);

    List<HonoursAttachModel> getAttachList();
}
