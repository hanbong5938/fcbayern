package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.mapper.GoodMapper;
import com.football.fcbayern.model.GoodModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class GoodServiceImpl implements GoodService {

    private GoodMapper goodMapper;

    private BoardMapper boardMapper;

    @Override
    public int check(GoodModel goodModel) {
        return goodMapper.check(goodModel);
    }

    @Transactional
    @Override
    public int insertGood(GoodModel goodModel) {
        boardMapper.good(goodModel.getBoardNo());
        return goodMapper.insertGood(goodModel);
    }

    @Transactional
    @Override
    public int insertBad(GoodModel goodModel) {
        boardMapper.bad(goodModel.getBoardNo());
        return goodMapper.insertBad(goodModel);
    }
}
