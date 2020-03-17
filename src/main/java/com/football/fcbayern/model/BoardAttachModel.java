package com.football.fcbayern.model;

import lombok.Data;

@Data
public class BoardAttachModel {
    private String uuid;
    private String uploadPath;
    private String fileNm;
    private String fileType;
    private boolean state;
}
