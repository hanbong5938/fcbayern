package com.football.fcbayern.model;

import lombok.Data;

@Data
public class CriteriaModel {
    private String type;
    private String keyword;
    private int pageStart;
    private int amount;
    private int pageNum;
    private int totalCnt;

    private int boardCategoryNo;

    public CriteriaModel() {
        this.pageNum = 1;
        this.amount = 10;
    }

    public void setPageNum(int pageNum) {
        //페이지 번호가 0이거나 0보다 작으면 1페이지로 한다.
        if (pageNum <= 0) {
            this.pageNum = 1;
            return;
        }
        this.pageNum = pageNum;
    }

    public int getPageStart() {
        //실질적으로 Mybatis 에서  파라미터로 인식해서  가져오는 것은 get 이다.
        // 따라서 getPageStart 에서 값을 설정한다.
        //시작 데이터 번호 = (페이지 번호 -1 ) * 페이지당 보여지는 개수
        this.pageStart = (this.pageNum - 1) * amount;
        return this.pageStart;
    }

    public void setAmount(int amount) {
        //몇개 씩 보여줄것인가 이다. 최대 100개씩 보여 줄것으로 설정한다.
        //만약 0보다 작거나 100 보다 크면 10으로 초기화 시킨다.
        if (amount <= 0 || amount > 100) {
            this.amount = 10;
            return;
        }
        this.amount = amount;
    }

}
