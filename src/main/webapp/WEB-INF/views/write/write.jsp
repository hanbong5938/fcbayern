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
                        <span class="ml-2">공지 사항</span>
                        <select class="ml-2">
                            <option>공지사항</option>
                        </select>
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
                </div>
            </div>
        </div>
    </div>

    <script src="js/write/write.js"></script>