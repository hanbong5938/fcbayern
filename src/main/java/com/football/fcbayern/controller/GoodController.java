package com.football.fcbayern.controller;

import com.football.fcbayern.model.GoodModel;
import com.football.fcbayern.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/good")
public class GoodController {

    private GoodService goodService;

    @Autowired
    public void setGoodService(GoodService goodService) {
        this.goodService = goodService;
    }

    @GetMapping("/check")
    public ResponseEntity<Integer> check(GoodModel goodModel) {
        return new ResponseEntity<>(goodService.check(goodModel), HttpStatus.OK);
    }

    @PostMapping("/good")
    public ResponseEntity<Integer> good(GoodModel goodModel) {
        return new ResponseEntity<>(goodService.insertGood(goodModel), HttpStatus.OK);
    }

    @PostMapping("/bad")
    public ResponseEntity<Integer> bad(GoodModel goodModel) {
        return new ResponseEntity<>(goodService.insertBad(goodModel), HttpStatus.OK);
    }

}
