package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class BoardAttachModel {
    private String uuid;
    private String uploadPath;
    private boolean state;
    private Timestamp createDt;
}
