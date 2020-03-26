package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class IconModel {
    private int iconNo;
    private String iconNm;
    private int iconPrice;
    private int iconCnt;
    private Timestamp createDt;
    private boolean state;
}
