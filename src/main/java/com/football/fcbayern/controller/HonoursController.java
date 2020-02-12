package com.football.fcbayern.controller;

import com.football.fcbayern.model.HonoursCategoryModel;
import com.football.fcbayern.model.HonoursModel;
import com.football.fcbayern.service.HonoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/honours")
public class HonoursController {

    private HonoursService honoursService;

    @Autowired
    public void setHonoursService(HonoursService honoursService) {
        this.honoursService = honoursService;
    }

    @GetMapping(value = "/category")
    public ResponseEntity<List<HonoursCategoryModel>> getCategoryList(){
        return new ResponseEntity<>(honoursService.getCategoryList(), HttpStatus.OK);
    }

    @PostMapping(value = "/insertInfo")
    public ResponseEntity<Integer> insertInfo(HonoursModel honoursModel){
        return new ResponseEntity<>(honoursService.insertInfo(honoursModel), HttpStatus.OK);
    }

    @GetMapping(value = "/getInfoList")
    public ResponseEntity<List<HonoursModel>> getInfoList(){
        return new ResponseEntity<>(honoursService.getInfoList(), HttpStatus.OK);
    }

}
