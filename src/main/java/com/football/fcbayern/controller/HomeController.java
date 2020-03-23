package com.football.fcbayern.controller;

import com.football.fcbayern.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "redirect:/index";
    }

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
    public String football(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
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
    public String notice(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/community/notice";
    }

    @GetMapping("/write")
    public String writer(int boardCategoryNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/write/write";
    }

    @GetMapping("/modify")
    public String modify(int boardCategoryNo, int boardNo, Model model) {
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        model.addAttribute("boardNo", boardNo);
        return "/write/write";
    }

    @GetMapping("/read")
    public String read(int boardNo, int boardCategoryNo, Model model) {
        model.addAttribute("boardNo", boardNo);
        model.addAttribute("boardCategoryNo", boardCategoryNo);
        return "/write/read";
    }

    @GetMapping("/profileReg")
    public String playerReg() {
        return "/write/profileReg";
    }

    @GetMapping("/honoursReg")
    public String honoursReg() {
        return "/write/honoursReg";
    }

    @GetMapping("/signInModal")
    public String signInModal() {
        return "/user/signInModal";
    }

    @GetMapping("/signUpModal")
    public String signUpModal() {
        return "/user/signUpModal";
    }

}
