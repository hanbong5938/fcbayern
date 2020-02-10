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

    @Override
    public int insertInfo(BoardModel boardModel) {
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
    public BoardModel modify(BoardModel boardModel) {
        return boardMapper.modify(boardModel);
    }

    @Override
    public BoardModel delete(int boardNo) {
        return boardMapper.delete(boardNo);
    }

    @Override
    public int totalCnt(CriteriaModel criteriaModel) {
        return boardMapper.totalCnt(criteriaModel);
    }

}
