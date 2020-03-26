package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.model.CriteriaModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BoardServiceImpl implements BoardService {

    private BoardMapper boardMapper;

    private PointService pointService;

    @Override
    public int insertInfo(BoardModel boardModel) {
        pointService.insertPointInfo(3, boardModel.getUserNo());
        return boardMapper.insertInfo(boardModel);
    }

    @Override
    public List<BoardCategoryModel> category() {
        return boardMapper.category();
    }

    @Override
    public List<BoardModel> infoList(CriteriaModel criteriaModel) {
        return boardMapper.infoList(criteriaModel);
    }

    @Override
    public BoardModel info(int boardNo) {
        boardMapper.hit(boardNo);
        return boardMapper.info(boardNo);
    }

    @Override
    public BoardModel infoLast(int userNo) {
        return boardMapper.infoLast(userNo);
    }

    @Override
    public int modify(BoardModel boardModel) {
        return boardMapper.modify(boardModel);
    }

    @Override
    public int delete(int boardNo) {
        return boardMapper.delete(boardNo);
    }

    @Override
    public int totalCnt(CriteriaModel criteriaModel) {
        return boardMapper.totalCnt(criteriaModel);
    }

    @Override
    public void replyCnt(int boardNo) {
        boardMapper.replyCnt(boardNo);
    }

    @Override
    public void replyCntDelete(int boardNo) {
        boardMapper.replyCntDelete(boardNo);
    }

}
