package com.football.fcbayern.configurations;

import com.football.fcbayern.service.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

//@Configuration 클래스에 Spring Security 설정할 클래스라고 정의
//WebSecurityConfigurerAdapter 를 상속받아 메서드를 구현하는 것이 일반적이다.
@EnableWebSecurity
//@AllArgsConstructor
//WebSecurityConfigurer 인스턴스를 편리하게 생성하기 위한 클래스
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

//    private UserServiceImpl userDetailService;

    //Spring Security 에서 제공하는 비밀번호 암호화 객체
    //Service에서 비밀번호 암호화 할 수 있도록 Bean으로 등록
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    //WebSecurity를 이용하여 FilterChinProxy 를 생성
    public void configure(WebSecurity webSecurity) throws Exception {
        //Spring security 가 무시하여 static directory 하위 파일 목록은 항상 통과
        webSecurity.ignoring().antMatchers("/css/**", "/js/**", "/images/**", "/fonts/**", "/plugin/**", "/sass/**");
    }

    @Override
    //HttpSecurity를 통해 HTTP 요청에 대한 보안구성
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        //authorizeRequests
        //antMatchers 를 통해여 특정 경로를 지정하며 역할에 딸느 설정을 잡아준다.
        //.csrf().disable 토큰 사용하지 않으려면
        httpSecurity.authorizeRequests()
                //페이지 권한 설정
//                .antMatchers("/write/**").hasRole("MEMBER")
                .antMatchers("/write/**").authenticated()
                .antMatchers("/iconStorage/**").authenticated()
                .antMatchers("/read/**").authenticated()
                .antMatchers("/iconShop").authenticated()
                .antMatchers("/**").permitAll()
//                .antMatchers("/**").permitAll()
                .and()
                //로그인 설정
                //form 기반으로 인증을 하도록하며 로그인 정보는 기보적으로 HttpSession을 이용한다.
                .formLogin()
                //커스텀 로그인 폼을 사용하기 위해서는 loginPage()메서드 사용
                .loginPage("/signInModal")
                //loginProcessingUrl()의 파라미터경로와 커스텀 로그인 form의 action 경로가 일치해야 한다.
                .loginProcessingUrl("/signIn")
                //실패시
                .failureUrl("/login-error")
                .usernameParameter("userId")
                .passwordParameter("userPw")
//                .defaultSuccessUrl("/")
//                .permitAll()
                .and()
                //로그아웃 설정
                .logout()
                // HTTP세션을 제거하여 로그아웃하며 기본 URL이 아닌 다른 URL로 재정의
                .logoutRequestMatcher(new AntPathRequestMatcher("/signOut"))
                .logoutSuccessUrl("/")
                //HTTP세션을 초기화하는 작업
                .invalidateHttpSession(true)
                //특정 쿠키 제거시
                //.deleteCookies("KEY명")
                .and()
                //403예외 권하닝 없는 경우 이동하도록
                .exceptionHandling()
                .accessDeniedPage("/");
    }
//
//    @Override
////    모든 인증은 AuthenticationManager를 통해 이루어지며 생성하기 위해 AuthenticationManagerBuilder 사용
//    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
////    userDetailService를 통해 필요한 정보를 가져온다. passwordEncoder를 통해 비밀번호 암호화
//        authenticationManagerBuilder.userDetailsService(userDetailService).passwordEncoder(passwordEncoder());
//    }
}
