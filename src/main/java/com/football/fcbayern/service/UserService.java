package com.football.fcbayern.service;

import com.football.fcbayern.model.UserModel;

public interface UserService {

    int signUp(UserModel userModel);

    UserModel findByUserId(String userId);

    int getPoint(int userNo);

}
