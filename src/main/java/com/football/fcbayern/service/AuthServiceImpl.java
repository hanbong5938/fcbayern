package com.football.fcbayern.service;

import com.football.fcbayern.mapper.AuthMapper;
import com.football.fcbayern.model.AuthModel;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private AuthMapper authMapper;

    @Override
    public List<AuthModel> getAuthList() {
        return authMapper.getAuthList();
    }
}
