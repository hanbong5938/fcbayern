package com.football.fcbayern.service;

import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;

import java.util.List;

public interface BoardService {

    int insertInfo(BoardModel boardModel);

    List<BoardCategoryModel> category();
}
