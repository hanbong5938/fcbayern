package com.football.fcbayern.service;

import com.football.fcbayern.model.GoodModel;

public interface GoodService {
    int check(GoodModel goodModel);

    int insertGood(GoodModel goodModel);

    int insertBad(GoodModel goodModel);
}
