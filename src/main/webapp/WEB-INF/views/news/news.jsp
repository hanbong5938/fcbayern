<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container mb-5">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="News"/></h1>
        <div class="mb-5">
            <div class="boardContent">
                <div id="list">
                    <%--                        <div class="col-lg-4"><img class="img-heightAuto" src="images/news/news.webp" alt="">--%>
                    <%--                            <h4 class="text-primary mt-2 mb-1">Robert Lewandowski named in UEFA Team of the Year</h4>--%>
                    <%--                            <p class="mb-1">--%>
                    <%--                                A survey of fans by UEFA put the FC Bayern striker in the top eleven for the first time.--%>
                    <%--                            </p>--%>
                    <%--                            <span class="text-sm">15/01/2020 오후 10:25</span>--%>
                    <%--                        </div>--%>
                    <%--                        <div class="col-lg-4"><img class="img-heightAuto" src="images/news/news.webp" alt="">--%>
                    <%--                            <h4 class="text-primary mt-2 mb-1">Robert Lewandowski named in UEFA Team of the Year</h4>--%>
                    <%--                            <p class="mb-1">--%>
                    <%--                                A survey of fans by UEFA put the FC Bayern striker in the top eleven for the first time.--%>
                    <%--                            </p>--%>
                    <%--                            <span class="text-sm">15/01/2020 오후 10:25</span>--%>
                    <%--                        </div>--%>
                    <%--                        <div class="col-lg-4"><img class="img-heightAuto" src="images/news/news.webp" alt="">--%>
                    <%--                            <h4 class="text-primary mt-2 mb-1">Robert Lewandowski named in UEFA Team of the Year</h4>--%>
                    <%--                            <p class="mb-1">--%>
                    <%--                                A survey of fans by UEFA put the FC Bayern striker in the top eleven for the first time.--%>
                    <%--                            </p>--%>
                    <%--                            <span class="text-sm">15/01/2020 오후 10:25</span>--%>
                    <%--                        </div>--%>
                </div>
            </div>
        </div>

        <div id="pageArea" class="page">
        </div>

        <div class="mb-10">
            <label class="float-right">
                <select id="type">
                    <option value="t">제 목</option>
                    <option value="c">내 용</option>
                    <option value="w">작성자</option>
                    <option value="tc">제목 + 내용</option>
                    <option value="tcw">전체</option>
                </select>
                <input id="keyword" class="">
                <button id="searchBtn" class="">검색</button>
            </label>
            <button id="regBtn" class="float-right regBtn btn btn-default" style="clear: both">등록</button>
        </div>

    </div>
</div>

<script src="js/news/news.js"></script>
