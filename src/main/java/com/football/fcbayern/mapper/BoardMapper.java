package com.football.fcbayern.mapper;

import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.model.CriteriaModel;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardMapper {

    int insertInfo(BoardModel boardModel);

    List<BoardCategoryModel> category();

    List<BoardModel> infoList(CriteriaModel criteriaModel);

    BoardModel info(int boardNo);

    int hit(int boardNo);

    BoardModel modify(BoardModel boardModel);

    BoardModel delete(int boardNo);
}
