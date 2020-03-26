package com.football.fcbayern.service;

import com.football.fcbayern.model.IconAttachModel;

import java.util.List;

public interface IconShopAttachService {

    int insertAttachInfo(IconAttachModel iconAttachModel);

    IconAttachModel getAttachInfo(IconAttachModel iconAttachModel);

    IconAttachModel getAttachImg(int iconNo);
}
