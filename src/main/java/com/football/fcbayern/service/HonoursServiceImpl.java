package com.football.fcbayern.service;

import com.football.fcbayern.mapper.HonoursMapper;
import com.football.fcbayern.model.HonoursCategoryModel;
import com.football.fcbayern.model.HonoursModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HonoursServiceImpl implements HonoursService {

   private HonoursMapper honoursMapper;

    @Override
    public List<HonoursCategoryModel> getCategoryList() {
        return honoursMapper.getCategoryList();
    }

    @Override
    public int insertInfo(HonoursModel honoursModel) {
        return honoursMapper.insertInfo(honoursModel);
    }

    @Override
    public List<HonoursModel> getInfoList() {
        return honoursMapper.getInfoList();
    }
}
