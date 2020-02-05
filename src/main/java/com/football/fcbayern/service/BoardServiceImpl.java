package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.model.CriteriaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    private BoardMapper boardMapper;

    @Autowired
    public void setBoardMaaper(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

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
        System.out.println(criteriaModel);
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

}
