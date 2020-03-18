package com.football.fcbayern.service;

import com.football.fcbayern.model.HonoursCategoryModel;
import com.football.fcbayern.model.HonoursModel;

import java.util.List;

public interface HonoursService {
    List<HonoursCategoryModel> getCategoryList();

    int insertInfo(HonoursModel honoursModel);

    List<HonoursModel> getInfoList();
}
