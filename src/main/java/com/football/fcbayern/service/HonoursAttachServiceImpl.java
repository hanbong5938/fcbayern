package com.football.fcbayern.service;

import com.football.fcbayern.mapper.HonoursAttachMapper;
import com.football.fcbayern.model.HonoursAttachModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HonoursAttachServiceImpl implements HonoursAttachService{

    private HonoursAttachMapper honoursAttachMapper;

    @Override
    public int insertAttachInfo(HonoursAttachModel honoursAttachModel) {
        return honoursAttachMapper.insertAttachInfo(honoursAttachModel);
    }

    @Override
    public List<HonoursAttachModel> getAttachList() {
        return honoursAttachMapper.getAttachList();
    }
}
