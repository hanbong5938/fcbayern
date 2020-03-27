package com.football.fcbayern.service;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconAttachModel;

import java.util.List;

public interface IconStorageService {
    List<IconAttachModel> getUerIconList(int userNo, CriteriaModel criteriaModel);

    int getTotalCnt(int userNo);

    int represent(int userNo, int iconNo);

}
