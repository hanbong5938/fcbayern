package com.football.fcbayern.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;

@Data
public class UserModel implements UserDetails {
    private int userNo;
    private String userId;
    private String userPw;
    private String userNm;
    private String email;
    private Timestamp createDt;
    private Timestamp updateDt;
    private boolean state;

    private int authNo;
    private String authNm;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<GrantedAuthority> authorityArrayList = new ArrayList<>();
        authorityArrayList.add(new SimpleGrantedAuthority(authNm));
        return authorityArrayList;
    }

    @Override
    public String getPassword() {
        return userPw;
    }

    @Override
    public String getUsername() {
        return userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return state;
    }
}
