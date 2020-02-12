package com.football.fcbayern.service;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.ReplyModel;

import java.util.List;

public interface ReplyService {

    int inert(ReplyModel replyModel, int boardNo);

    List<ReplyModel> list(int boardNo, CriteriaModel criteriaModel);

    int modify(ReplyModel replyModel);

    int delete(int boardNo, int replyNo);
}
