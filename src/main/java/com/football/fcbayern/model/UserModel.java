package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;


@Data
public class UserModel {
    private int userNo;
    private String userId;
    private String userPw;
    private String userNm;
    private String email;
    private int point;
    private Timestamp createDt;
    private Timestamp updateDt;
    private boolean state;

    private int authNo;
    private String authNm;
}
