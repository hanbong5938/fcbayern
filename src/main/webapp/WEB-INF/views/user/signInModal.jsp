<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<meta name="_csrf" content="${_csrf.token}"/>
<meta name="_csrf_header" content="${_csrf.headerName}"/>


<div class="card align-middle">
    <div class="card-title" style="margin-top:10%;">
        <h2 class="card-title text-center" style="color:#113366;">로그인 폼</h2>
    </div>
    <div class="card-body">
        <div class="">
            <h5 class="form-signIn-heading">Sign in</h5>
            <input type="hidden" id="_csrfToken" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            <label class="sr-only">Your ID</label>
            <input type="text" id="userId" class="form-control" placeholder="ID" required autofocus><BR>
            <label class="sr-only">Password</label>
            <input type="password" id="userPw" class="form-control" placeholder="Password" required><br>
            <div class="checkbox">
                <div class="col-sm-12 pr-0 row">
                    <div class="col-sm-8">
                        <label>
                            <input type="checkbox" value="remember-me"> 기억하기
                        </label>
                    </div>
                    <div class="col-sm-4 pl-4 pr-0">
                        <a id="signUpLink" class="small href">회원가입</a>
                    </div>
                </div>
            </div>
            <button id="signInBtn" class="btn btn-lg btn-primary btn-block">로 그 인</button>
        </div>

    </div>
</div>

<script src="js/user/signInModal.js"></script>