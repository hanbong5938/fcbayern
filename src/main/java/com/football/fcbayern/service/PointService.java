package com.football.fcbayern.service;

import org.apache.ibatis.annotations.Param;

public interface PointService {
    void insertPointInfo(int point, int userNo);

    void addPoint(int point, int userNo);

}
