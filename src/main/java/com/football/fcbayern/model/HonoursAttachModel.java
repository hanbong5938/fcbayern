package com.football.fcbayern.model;

import lombok.Data;

@Data
public class HonoursAttachModel {
    private String uuid;
    private String uploadPath;
    private boolean state;
    private int honoursNo;
}
