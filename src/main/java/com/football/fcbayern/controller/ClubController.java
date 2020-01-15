package com.football.fcbayern.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/club")
public class ClubController {
    @GetMapping("/team")
    public String team() {
        return "/club/team";
    }

    @GetMapping("/player")
    public String player() {
        return "/club/player";
    }

}
