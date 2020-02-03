package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardMapper;
import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{

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

}
