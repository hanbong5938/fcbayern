package com.football.fcbayern.mapper;

import com.football.fcbayern.model.HonoursCategoryModel;
import com.football.fcbayern.model.HonoursModel;

import java.util.List;

public interface HonoursMapper {
    List<HonoursCategoryModel> getCategoryList();

    int insertInfo(HonoursModel honoursModel);

    List<HonoursModel> getInfoList();
}
