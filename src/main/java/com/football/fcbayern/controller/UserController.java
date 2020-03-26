package com.football.fcbayern.controller;

import com.football.fcbayern.model.UserModel;
import com.football.fcbayern.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signUp")
    public ResponseEntity<Integer> signUp(UserModel userModel) {
        return new ResponseEntity<>(userService.signUp(userModel), HttpStatus.OK);
    }

}
