package com.football.fcbayern.service;

import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.model.CriteriaModel;

import java.util.List;

public interface BoardService {

    int insertInfo(BoardModel boardModel);

    List<BoardCategoryModel> category();

    List<BoardModel> infoList(CriteriaModel criteriaModel);

    BoardModel info(int boardNo);

    BoardModel modify(BoardModel boardModel);

    BoardModel delete(int boardNo);

    int totalCnt(CriteriaModel criteriaModel);
}
