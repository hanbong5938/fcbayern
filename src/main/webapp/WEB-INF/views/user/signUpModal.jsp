<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="card align-middle">
    <div class="card-title" style="margin-top:10%;">
        <h2 class="card-title text-center" style="color:#113366;">Sign Up</h2>
    </div>
    <div class="card-body">
        <div class="">
            <h5 class="form-signUp-heading">Sign Up</h5>
            <label class="sr-only">Your ID</label>
            <input type="text" id="userId" class="form-control" placeholder="ID" required autofocus><BR>
            <label class="sr-only">Password</label>
            <input type="password" id="userPw" class="form-control" placeholder="Password" required><br>
            <label class="sr-only">Password Check</label>
            <div id="wrong" class="text-danger font-weight-light mt-0"></div>
            <input type="password" id="userPwCheck" class="form-control" placeholder="PasswordCheck" required><br>
            <label class="sr-only">Name</label>
            <input type="text" id="userNm" class="form-control" placeholder="이름을 입력하세요" required><br>
            <label class="sr-only">EMAIL</label>
            <input type="email" id="email" class="form-control" placeholder="이메일을 입력하세요" required><br>

            <button id="signUpBtn" class="btn btn-lg btn-primary btn-block"><spring:message code="SignUp"/></button>
        </div>

    </div>
</div>
<script src="js/user/signUpModal.js"></script>