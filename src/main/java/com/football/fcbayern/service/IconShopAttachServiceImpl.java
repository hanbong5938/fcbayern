package com.football.fcbayern.service;

import com.football.fcbayern.mapper.HonoursAttachMapper;
import com.football.fcbayern.mapper.IconShopAttachMapper;
import com.football.fcbayern.model.HonoursAttachModel;
import com.football.fcbayern.model.IconAttachModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class IconShopAttachServiceImpl implements IconShopAttachService {

    private IconShopAttachMapper iconShopAttachMapper;

    @Override
    public int insertAttachInfo(IconAttachModel iconAttachModel) {
        return iconShopAttachMapper.insertAttachInfo(iconAttachModel);
    }

    @Override
    public IconAttachModel getAttachInfo(IconAttachModel iconAttachModel) {
        return iconShopAttachMapper.getAttachInfo(iconAttachModel);
    }

    @Override
    public IconAttachModel getAttachImg(int iconNo) {
        return iconShopAttachMapper.getAttachImg(iconNo);
    }
}
