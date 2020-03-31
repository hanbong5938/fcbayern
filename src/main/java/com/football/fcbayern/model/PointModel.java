package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class PointModel {
    private int pointNo;
    private int point;
    private int userNo;
    private Timestamp createDt;
    private Timestamp updateDt;
    private boolean state;
}
