package com.football.fcbayern.controller;

import com.football.fcbayern.model.ReplyModel;
import com.football.fcbayern.service.BoardService;
import com.football.fcbayern.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reply")
public class ReplyController {

    private ReplyService replyService;

    @Autowired
    public void setReplyService(ReplyService replyService) {
        this.replyService = replyService;
    }

    @PostMapping(value = "/insert")
    ResponseEntity<Integer> insert(ReplyModel replyModel, int boardNo) {
        return new ResponseEntity<>(replyService.inert(replyModel, boardNo), HttpStatus.OK);
    }

    @GetMapping(value = "/list/{boardNo}")
    ResponseEntity<List<ReplyModel>> list(@PathVariable int boardNo) {
        return new ResponseEntity<>(replyService.list(boardNo), HttpStatus.OK);
    }

}
