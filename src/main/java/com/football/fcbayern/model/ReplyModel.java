package com.football.fcbayern.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ReplyModel {
    private int replyNo;
    private String reply;
    private Timestamp createDt;
    private Timestamp updateDt;
    private String writer;
    private int boardNo;
    private int userNo;
}
