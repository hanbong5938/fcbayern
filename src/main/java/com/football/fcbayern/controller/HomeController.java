package com.football.fcbayern.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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

    @GetMapping("/freeBoard")
    public String freeBoard(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/community/freeBoard";
    }

    @GetMapping("/multiMedia")
    public String multiMedia(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/community/multiMedia";
    }

    @GetMapping("/notice")
    public String notice() {
        return "/community/notice";
    }

    @GetMapping("/write")
    public String writer(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/write/write";
    }

    @GetMapping("/read")
    public String read(int boardNo, Model model) {
        model.addAttribute("boardNo", boardNo);
        return "/write/read";
    }

    @GetMapping("/profileReg")
    public String playerReg() {
        return "/write/profileReg";
    }


}
