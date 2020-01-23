package com.football.fcbayern.model;

import lombok.Data;

@Data
public class ProfileAttachModel {
    private String uuid;
    private String uploadPath;
    private String fileNm;
    private boolean state;

    private int profileNo;
}
