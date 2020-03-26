package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class IconRetainModel {
    private int iconRetainNo;
    private int userNo;
    private int iconNo;
    private boolean state;
    private boolean represent;
    private Timestamp createDt;
}
