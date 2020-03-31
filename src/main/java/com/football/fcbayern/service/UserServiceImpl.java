package com.football.fcbayern.service;

import com.football.fcbayern.mapper.UserMapper;
import com.football.fcbayern.model.CustomUserModel;
import com.football.fcbayern.model.UserModel;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collection;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    private UserMapper userMapper;
    private PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public int signUp(UserModel userModel) {
        //중복아이디 체
        if (checkNull(userModel.getUserId()) > 0) {
            return 0;
        }
        //암호화
        userModel.setUserPw(passwordEncoder.encode(userModel.getUserPw()));
        return userMapper.signUp(userModel);
    }

    @Override
    public UserModel findByUserId(String userId) {
        return userMapper.findByUserId(userId);
    }

    @Override
    public int getPoint(int userNo) {
        return userMapper.getPoint(userNo);
    }

    @Override
    public int checkNull(String userId) {
        return userMapper.checkNull(userId);
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        HttpServletRequest httpServletRequest = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String userPw = httpServletRequest.getParameter("userPw");
        UserModel userModel = findByUserId(userId);
        //matches 를 이용하여 파라미터로 가져온 userPw와 encode 된 userPw가 일치하는지 확인
        if (userModel != null && passwordEncoder.matches(userPw, userModel.getUserPw())) {
            //CustomUserModel에서 User 상속받아서 생성자 통해서 변걍
            return new CustomUserModel(userModel.getUserId(), userModel.getUserPw(), auth(userModel.getAuthNm()), userModel.getUserNo(), userModel.getUserId(), userModel.getUserNm(),
                    userModel.getEmail(), userModel.getAuthNo(), userModel.getAuthNm());
        }

        //유저 정보가 없으면 UsernameNotFoundException 예외 던진다.
        throw new UsernameNotFoundException(userId);
    }

    //authrities로 변환 하기 위해서 사용
    private static Collection<? extends GrantedAuthority> auth(String auth) {
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(auth));
        return authorities;
    }
}
