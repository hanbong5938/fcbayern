package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class BoardCategoryModel {
    private int boardCategoryNo;
    private String categoryNm;
    private Timestamp createDt;
    private Timestamp updateDt;
    private boolean state;
    private boolean notice;
}
