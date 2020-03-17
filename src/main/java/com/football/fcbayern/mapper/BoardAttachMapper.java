package com.football.fcbayern.mapper;

import org.apache.ibatis.annotations.Param;

public interface BoardAttachMapper {

    int insertInfo(@Param("uuid") String uuid, @Param("uploadPath") String uploadPath);
}
