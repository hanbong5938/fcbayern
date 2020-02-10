package com.football.fcbayern.mapper;

import com.football.fcbayern.model.ReplyModel;

import java.util.List;

public interface ReplyMapper {
    int insert(ReplyModel replyModel);

    List<ReplyModel> list(int boardNo);
}
