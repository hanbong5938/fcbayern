<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<div class="container mt-10">
    <div class="container-custom">
        <div class="col-lg-12">

            <div class="card-body">
                <div>
                    <label>
                        <span>게시판</span>
                        <select class="ml-2 note-color-select">
                            <option>자유게시판</option>
                            <option>멀티미디어</option>
                            <option>축구</option>
                        </select>
                        <span>공지 사항</span>
                        <select class="ml-2">
                            <option>공지사항</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <span>제&nbsp;&nbsp;&nbsp;&nbsp;목</span><input class="ml-2" value="게시글 제목을 입력하세">
                    </label>
                </div>
                <div id="summernote">

                </div>
            </div>
        </div>
    </div>


    <script src="js/write/write.js"></script>
