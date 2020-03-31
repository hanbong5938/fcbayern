package com.football.fcbayern.service;

import com.football.fcbayern.mapper.IconStorageMapper;
import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconAttachModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
public class IconStorageServiceImpl implements IconStorageService {

    private IconStorageMapper iconStorageMapper;
    private IconShopService iconShopService;

    @Override
    public List<IconAttachModel> getUerIconList(int userNo, CriteriaModel criteriaModel) {
        return iconStorageMapper.getUerIconList(userNo, criteriaModel.getPageStart(), criteriaModel.getAmount());
    }

    @Override
    public int getTotalCnt(int userNo) {
        return iconStorageMapper.getTotalCnt(userNo);
    }

    @Transactional
    @Override
    public int represent(int userNo, int iconNo) {
        iconShopService.beforeRepresent(userNo);
        return iconStorageMapper.represent(userNo, iconNo);
    }
}
