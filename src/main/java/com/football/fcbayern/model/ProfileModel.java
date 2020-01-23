package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ProfileModel {
    private int profileNo;
    private String profileNm;
    private int back;
    private Timestamp birthDate;
    private boolean state;
    private Timestamp createDt;
    private Timestamp updateDt;

    private int userNo;
}

