package com.football.fcbayern.mapper;

import com.football.fcbayern.model.BoardAttachModel;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardAttachMapper {

    int insertInfo(@Param("uuid") String uuid, @Param("uploadPath") String uploadPath);

    BoardAttachModel getInfo(int boarNo);
}
