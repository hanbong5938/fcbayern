<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<%--<div class="modal-header">--%>
<%--    <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button>--%>
<%--    <h3 class="smaller lighter blue no-margin modal-title">검수정보 등록</h3>--%>
<%--</div>--%>

<%--<div class="modal-body">--%>
<%--    테스트입니다.--%>
<%--</div>--%>

<%--<div class="modal-footer">--%>
<%--    <span class="btn btn-sm btn-warning" id="testDel">--%>
<%--        전체삭제<i class="ace-icon fa fa-arrow-right icon-on-right bigger-110"></i>--%>
<%--    </span>--%>
<%--    <span class="btn btn-sm btn-success" id="testSave">--%>
<%--        저장<i class="ace-icon fa fa-arrow-right icon-on-right bigger-110"></i>--%>
<%--    </span>--%>
<%--    <button class="btn btn-sm btn-danger pull-right" data-dismiss="modal" id="btnClose">--%>
<%--        <i class="ace-icon fa fa-times"></i>닫기--%>
<%--    </button>--%>
<%--</div>--%>


<div class="card align-middle">
    <div class="card-title" style="margin-top:10%;">
        <h2 class="card-title text-center" style="color:#113366;">로그인 폼</h2>
    </div>
    <div class="card-body">
        <form method="post">
            <h5 class="form-signin-heading">Sign in</h5>
            <label class="sr-only">Your ID</label>
            <input type="text" id="uid" class="form-control" placeholder="ID" required autofocus><BR>
            <label class="sr-only">Password</label>
            <input type="password" class="form-control" placeholder="Password" required><br>
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> 기억하기
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">로 그 인</button>
        </form>

    </div>
</div>