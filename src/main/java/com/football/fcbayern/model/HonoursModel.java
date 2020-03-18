package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class HonoursModel {
    private int honoursNo;
    private String honoursNm;
    private boolean state;
    private Timestamp updateDt;
    private Timestamp createDt;

    private int userNo;
    private int honoursCategoryNo;
}
