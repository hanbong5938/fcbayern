package com.football.fcbayern.controller;

import org.springframework.stereotype.Controller;
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
    public String freeBoard() {
        return "/community/freeBoard";
    }

    @GetMapping("/multiMedia")
    public String multiMedia() {
        return "/community/multiMedia";
    }

    @GetMapping("/notice")
    public String notice() {
        return "/community/notice";
    }

    @GetMapping("/write")
    public String writer() {
        return "/write/write";
    }

    @GetMapping("/profileReg")
    public String playerReg() {
        return "/write/profileReg";
    }


}
