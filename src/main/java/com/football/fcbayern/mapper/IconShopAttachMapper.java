package com.football.fcbayern.mapper;

import com.football.fcbayern.model.IconAttachModel;
import org.apache.ibatis.annotations.Param;


public interface IconShopAttachMapper {
    int insertAttachInfo(IconAttachModel iconAttachModel);

    IconAttachModel getAttachInfo(IconAttachModel iconAttachModel);

    IconAttachModel getAttachImg(int iconNo);

}
