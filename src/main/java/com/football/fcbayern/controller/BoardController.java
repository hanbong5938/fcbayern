package com.football.fcbayern.controller;

import com.football.fcbayern.model.BoardCategoryModel;
import com.football.fcbayern.model.BoardModel;
import com.football.fcbayern.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/board")
@RestController
public class BoardController {

    private BoardService boardService;

    @Autowired
    public void setBoardService(BoardService boardService) {
        this.boardService = boardService;
    }


    @GetMapping(value = "/category", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<BoardCategoryModel>> category() {
        return new ResponseEntity<>(boardService.category(), HttpStatus.OK);
    }

    @GetMapping(value = "/infoList")
    public ResponseEntity<List<BoardModel>> infoList(int boardCategoryNo) {
        return new ResponseEntity<>(boardService.infoList(boardCategoryNo), HttpStatus.OK);
    }

    @PostMapping(value = "/insertInfo", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> insertInfo(@RequestBody BoardModel boardModel) {
        int count = boardService.insertInfo(boardModel);
        System.out.println(boardModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(value = "/info")
    public ResponseEntity<BoardModel> info(int boardNo) {
        System.out.println(boardService.info(boardNo));
        return new ResponseEntity<>(boardService.info(boardNo), HttpStatus.OK);
    }

}
