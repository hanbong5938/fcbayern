package com.football.fcbayern.controller;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconModel;
import com.football.fcbayern.model.UserModel;
import com.football.fcbayern.service.IconShopService;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/iconShop")
public class IconShopController {

    private IconShopService iconShopService;

    @Autowired
    public void setIconShopService(IconShopService iconShopService) {
        this.iconShopService = iconShopService;
    }

    @PostMapping("/insertIcon")
    public ResponseEntity<Integer> insertIcon(IconModel iconModel) {
        return new ResponseEntity<>(iconShopService.insertIcon(iconModel), HttpStatus.OK);
    }

    @GetMapping(value = "/getInfoList")
    public ResponseEntity<List<IconModel>> getInfoList(CriteriaModel criteriaModel) {
        return new ResponseEntity<>(iconShopService.getInfoList(criteriaModel), HttpStatus.OK);
    }

    @GetMapping("/getTotalCnt")
    public ResponseEntity<Integer> getTotalCnt() {
        return new ResponseEntity<>(iconShopService.getTotalCnt(), HttpStatus.OK);
    }

    @PostMapping("/buyIcon/{userNo}&{iconNo}")
    public ResponseEntity<String> buyIcon(@PathVariable int userNo, @PathVariable int iconNo) {
        int cnt = iconShopService.buyIcon(userNo, iconNo);
        return cnt == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/checkRepresent/{userNo}")
    public ResponseEntity<Integer> checkRepresent(@PathVariable int userNo) {
        return new ResponseEntity<>(iconShopService.checkRepresent(userNo), HttpStatus.OK);
    }
}
