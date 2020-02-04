package com.football.fcbayern.mapper;

import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;

import java.util.List;

public interface BoardMapper {

    int insertInfo(BoardModel boardModel);

    List<BoardCategoryModel> category();

    List<BoardModel> infoList(int boardCategoryNo);

    BoardModel info(int boardNo);
}
