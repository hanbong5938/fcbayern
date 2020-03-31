package com.football.fcbayern.mapper;

import com.football.fcbayern.model.UserModel;

public interface UserMapper {

    int signUp(UserModel userModel);

    UserModel findByUserId(String userId);

    int getPoint(int userNo);

    int checkNull(String userId);
}
