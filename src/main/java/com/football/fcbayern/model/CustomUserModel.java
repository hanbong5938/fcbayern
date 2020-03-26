package com.football.fcbayern.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

//Data 사용시 에러
@Getter
@Setter
@ToString
public class CustomUserModel extends User {
    private int userNo;
    private String userId;
    private String userNm;
    private String email;

    private int authNo;
    private String authNm;

    public CustomUserModel(String username, String password, Collection<? extends GrantedAuthority> authorities, int userNo, String userId, String userNm, String email, int authNo, String authNm) {
        super(username, password, authorities);
        this.userNo = userNo;
        this.userId = userId;
        this.userNm = userNm;
        this.email = email;
        this.authNo = authNo;
        this.authNm = authNm;
    }
}
