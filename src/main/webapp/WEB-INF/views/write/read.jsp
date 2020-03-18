<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="container-custom">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <label>
                        <span>제&nbsp;&nbsp;&nbsp;목</span><input id="title" class="ml-4 input" readonly="readonly">
                    </label>
                </div>

                <div class="card-body">
                    <label>
                        <span id="content" class="" readonly="readonly">

                        </span>
                    </label>
                    <div class="row justify-content-center">
                        <button id="good" class="btn btn-outline-primary"><i class="icon-point-up"></i> <spring:message
                                code="Good"/></button>
                        <button id="badBtn" class="btn btn-outline-danger ml-1"><i class="icon-point-down"></i> <spring:message
                                code="Bad"/></button>
                    </div>
                </div>
            </div>

            <div class="card">
                <span class="ml-1">
                    <spring:message code="Reply"/> <span id="replyTotalCnt"></span><spring:message code="cnt"/>
                </span>
            </div>
            <div class="card-footer">
                <ul id="replyList" class="">

                </ul>
                <div id="pageArea" class="page mt-2">
                </div>

                <div class="row">
                    <div class="col-lg-11">
                        <textarea id="reply" class="width100 resizeNone" rows="2"></textarea>
                    </div>
                    <div class="col-lg-1">
                        <button id="replyReg" class="btn btn-default pr-0 pl-0"><spring:message code="reg"/></button>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <button id="list" class="pull-right btn btn-primary"><spring:message
                        code="list"/></button>
                <button id="modify" class="pull-right btn btn-warning"><spring:message
                        code="modify"/></button>
                <button id="del" class="pull-right btn btn-danger"><spring:message
                        code="del"/></button>
            </div>
        </div>
    </div>
    <input id="boardNo" value='${boardNo}' readonly="readonly"/>
    <input id="boardCategoryNo" value='${boardCategoryNo}' readonly="readonly"/>

    <script src="js/write/read.js"></script>