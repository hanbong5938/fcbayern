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
                </div>
                <div>
                    <button id="list" class="pull-right btn btn-primary"><spring:message
                            code="list"/></button>
                    <button id="modi" class="pull-right btn btn-warning"><spring:message
                            code="modi"/></button>
                    <button id="del" class="pull-right btn btn-danger"><spring:message
                            code="del"/></button>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" id="boardNo" value='${boardNo}' readonly="readonly"/>

    <script src="js/write/read.js"></script>