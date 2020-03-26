<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="container-custom">
        <div class="col-lg-12">

            <div class="card-body">
                <div>
                    <label>
                        <span>게시판</span>
                        <select id="category" class="ml-2 note-color-select">
                        </select>
                        <div id="noticeCheckBoxAndText">
                            <span class="ml-2"><spring:message code="Notice"/> </span>
                            <input id="noticeCheckBox" class="ml2" type="checkbox"/>
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <span>제&nbsp;&nbsp;&nbsp;목</span><input id="title" class="ml-2" placeholder="게시글 제목을 입력하세요">
                    </label>
                </div>
                <div id="summernote">

                </div>
                <div>
                    <button id="reg" class="pull-right btn btn-primary"><spring:message
                            code="reg"/></button>
                    <button id="mod" class="pull-right btn btn-warning"><spring:message
                            code="modify"/></button>
                </div>
            </div>
        </div>
    </div>
    <input id="boardNo" type="hidden" value='${boardNo}' readonly="readonly"/>
    <input id="boardCategoryNo" type="hidden" value='${boardCategoryNo}' readonly="readonly"/>

    <script src="js/write/write.js"></script>