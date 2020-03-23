package com.football.fcbayern.service;

import com.football.fcbayern.model.UserModel;

public interface UserService {

    int signUp(UserModel userModel);

    UserModel findById(String userId);

}
