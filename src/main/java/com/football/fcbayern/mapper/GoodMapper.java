package com.football.fcbayern.mapper;


import com.football.fcbayern.model.GoodModel;

public interface GoodMapper {

    int check(GoodModel goodModel);

    int insertGood(GoodModel goodModel);

    int insertBad(GoodModel goodModel);

}
