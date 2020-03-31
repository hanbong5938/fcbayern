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

    private BoardService boardService;

    private PointService pointService;

    @Transactional
    @Override
    public int inert(ReplyModel replyModel, int boardNo) {
        boardService.replyCnt(boardNo);
        pointService.insertPointInfo(1, replyModel.getUserNo());
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
    public int delete(int boardNo, int replyNo) {
        boardService.replyCntDelete(boardNo);
        return replyMapper.delete(replyNo);
    }

}
