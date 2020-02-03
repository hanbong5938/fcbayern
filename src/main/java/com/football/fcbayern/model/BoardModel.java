package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class BoardModel {
    private int boardNo;
    private String title;
    private String content;
    private Timestamp createDt;
    private Timestamp updateDt;
    private boolean state;
    private int hit;

    private int userNo;
    private int boardCategoryNo;
}

