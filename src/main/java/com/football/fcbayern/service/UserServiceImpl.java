package com.football.fcbayern.service;

import com.football.fcbayern.mapper.UserMapper;
import com.football.fcbayern.model.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private UserMapper userMapper;

    @Transactional
    @Override
    public int signUp(UserModel userModel) {
        //암호화
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        userModel.setUserPw(bCryptPasswordEncoder.encode(userModel.getUserPw()));
        System.out.println(userModel);
        int count = userMapper.signUp(userModel);
        return count;
    }

    @Override
    public UserModel findById(String userId) {
        return userMapper.findById(userId);
    }


    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        UserModel userInfo = userMapper.findById(userId);

        //유저 정보가 없으면 UsernameNotFoundException 예외 던진다.
        if (userInfo == null) {
            throw new UsernameNotFoundException(userId);
        }
        System.out.println(userInfo);
        return userInfo;
    }
}
