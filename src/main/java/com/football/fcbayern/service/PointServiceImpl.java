package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.mapper.PointMapper;
import com.football.fcbayern.model.PointModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PointServiceImpl implements PointService {

    private PointMapper pointMapper;

    @Override
    public void insertPointInfo(int point, int userNo) {
        pointMapper.insertPointInfo(point, userNo);
        addPoint(point, userNo);
    }

    @Override
    public void addPoint(int point, int userNo) {
        pointMapper.addPoint(point, userNo);
    }
}
