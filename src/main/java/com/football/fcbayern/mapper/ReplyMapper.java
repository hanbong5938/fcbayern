package com.football.fcbayern.mapper;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.ReplyModel;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ReplyMapper {
    int insert(ReplyModel replyModel);

    List<ReplyModel> list(@Param("boardNo") int boardNo, @Param("criteriaModel")CriteriaModel criteriaModel);
}
