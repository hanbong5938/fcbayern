package com.football.fcbayern.service;

import com.football.fcbayern.model.BoardAttachModel;
import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.model.CriteriaModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BoardAttachService {

    void insertInfo(List<String> list);

    BoardAttachModel getInfo(int boarNo);
}
