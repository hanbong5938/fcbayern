package com.football.fcbayern;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//MapperScan 사용하지 않으면 Mapper 인터페이스를 빈으로 찾지 못한다.
@MapperScan(basePackages = "com.football.fcbayern.mapper")
public class FcbayernApplication {

    public static void main(String[] args) {
        SpringApplication.run(FcbayernApplication.class, args);
    }

}
