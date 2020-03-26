package com.football.fcbayern.mapper;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconModel;
import com.football.fcbayern.model.UserModel;

import java.util.List;

public interface IconShopMapper {
    int insertIcon(IconModel iconModel);

    List<IconModel> getInfoList(CriteriaModel criteriaModel);

    int getTotalCnt();

    int buyIcon(int userNo, int iconNo);

    int getPrice(int iconNo);

    void beforeRepresent(int userNo);

    int checkRetain(int userNo, int iconNo);

    int checkRepresent(int userNo);
}
