package com.football.fcbayern.mapper;

import com.football.fcbayern.model.IconAttachModel;

import java.util.List;

public interface IconStorageMapper {

    List<IconAttachModel> getUerIconList(int userNo, int pageStart, int amount);

    int getTotalCnt(int userNo);

    int represent(int userNo, int iconNo);
}
