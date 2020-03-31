package com.football.fcbayern.controller;

import com.football.fcbayern.model.CriteriaModel;
import com.football.fcbayern.model.IconAttachModel;
import com.football.fcbayern.service.IconStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/iconStorage")
public class IconStorageController {

    private IconStorageService iconStorageService;

    @Autowired
    public void setIconStorageService(IconStorageService iconStorageService) {
        this.iconStorageService = iconStorageService;
    }

    @GetMapping("/getUserRetainList/{userNo}")
    public ResponseEntity<List<IconAttachModel>> getUserRetainList(@PathVariable int userNo, CriteriaModel criteriaModel) {
        return new ResponseEntity<>(iconStorageService.getUerIconList(userNo, criteriaModel), HttpStatus.OK);
    }

    @GetMapping("/getTotalCnt/{userNo}")
    public ResponseEntity<Integer> getTotalCnt(@PathVariable int userNo) {
        return new ResponseEntity<>(iconStorageService.getTotalCnt(userNo), HttpStatus.OK);
    }

    @PostMapping("/represent/{userNo}&{iconNo}")
    public ResponseEntity<String> represent(@PathVariable int userNo, @PathVariable int iconNo) {
        int cnt = iconStorageService.represent(userNo, iconNo);
        return cnt == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
