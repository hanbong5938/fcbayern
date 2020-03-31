package com.football.fcbayern.mapper;

import com.football.fcbayern.model.PointModel;
import org.apache.ibatis.annotations.Param;

public interface PointMapper {
    void insertPointInfo(@Param("point") int point, @Param("userNo") int userNo);

    void addPoint(@Param("point") int point, @Param("userNo") int userNo);
}
