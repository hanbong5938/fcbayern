package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class HonoursCategoryModel {
    private int honoursCategoryNo;
    private String categoryNm;
    private boolean international;
    private Timestamp createDt;
    private Timestamp updateDt;
    private String fileNm;
}
