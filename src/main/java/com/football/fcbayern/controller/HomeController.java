package com.football.fcbayern.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class HomeController {

    @GetMapping("/index")
    public String index() {
        return "/index";
    }

    @GetMapping("/team")
    public String team() {
        return "/club/team";
    }

    @GetMapping("/player")
    public String player() {
        return "/club/player";
    }

    @GetMapping("/honours")
    public String honours() {
        return "/club/honours";
    }

    @GetMapping("/news")
    public String news() {
        return "/news/news";
    }

    @GetMapping("/football")
    public String football() {
        return "/football/football";
    }

    @PostMapping("/freeBoard")
    public String freeBoard(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/community/freeBoard";
    }

    @PostMapping("/multiMedia")
    public String multiMedia(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/community/multiMedia";
    }

    @GetMapping("/notice")
    public String notice() {
        return "/community/notice";
    }

    //load에서 파라미터가 2개 이상들어가면 post로 바뀌기에 post를 통해서 값을 받는다.
    @PostMapping("/write")
    public String writer(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/write/write";
    }

    @GetMapping("/profileReg")
    public String playerReg() {
        return "/write/profileReg";
    }


}
