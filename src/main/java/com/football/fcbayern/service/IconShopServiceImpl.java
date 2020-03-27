package com.football.fcbayern.service;

import com.football.fcbayern.mapper.IconShopMapper;
import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconModel;
import com.football.fcbayern.model.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class IconShopServiceImpl implements IconShopService {

    private IconShopMapper iconShopMapper;
    private UserService userService;
    private PointService pointService;

    @Override
    public int insertIcon(IconModel iconModel) {
        return iconShopMapper.insertIcon(iconModel);
    }

    @Override
    public List<IconModel> getInfoList(CriteriaModel criteriaModel) {
        return iconShopMapper.getInfoList(criteriaModel);
    }

    @Override
    public int getTotalCnt() {
        return iconShopMapper.getTotalCnt();
    }

    @Transactional
    @Override
    public int buyIcon(int userNo, int iconNo) {
        int price = getPrice(iconNo);
        int userPoint = userService.getPoint(userNo);

        //포인트 부족하면 0 리턴
        if (userPoint < price || checkRetain(userNo, iconNo) != 0) {
            return 0;
        }

        pointService.insertPointInfo(price * -1, userNo);
        beforeRepresent(userNo);
        return iconShopMapper.buyIcon(userNo, iconNo);
    }

    @Override
    public int getPrice(int iconNo) {
        return iconShopMapper.getPrice(iconNo);
    }

    @Override
    public void beforeRepresent(int userNo) {
        iconShopMapper.beforeRepresent(userNo);
    }

    @Override
    public int checkRetain(int userNo, int iconNo) {
        return iconShopMapper.checkRetain(userNo, iconNo);
    }

    @Override
    public int checkRepresent(int userNo) {
        return iconShopMapper.checkRepresent(userNo);
    }



}
