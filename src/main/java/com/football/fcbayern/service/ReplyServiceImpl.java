package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.mapper.ReplyMapper;
import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.ReplyModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class ReplyServiceImpl implements ReplyService {

    private ReplyMapper replyMapper;

    private BoardMapper boardMapper;

    @Transactional
    @Override
    public int inert(ReplyModel replyModel, int boardNo) {
        boardMapper.replyCnt(boardNo);
        return replyMapper.insert(replyModel);
    }

    @Override
    public List<ReplyModel> list(int boardNo, CriteriaModel criteriaModel) {
        return replyMapper.list(boardNo, criteriaModel);
    }

    @Override
    public int modify(ReplyModel replyModel) {
        return replyMapper.modify(replyModel);
    }

    @Override
    public int delete(int boardNo,int replyNo) {
        boardMapper.replyCntDelete(boardNo);
        return replyMapper.delete(replyNo);
    }

}
