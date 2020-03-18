<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="card-body">
    <table class="table text-center">
        <thead class="thead-dark">
        <tr>
            <th scope="col" style="width: 50%"><spring:message code="Title"/></th>
            <th scope="col" style="width: 15%"><spring:message code="Writer"/></th>
            <th scope="col" style="width: 15%"><spring:message code="Date"/></th>
            <th scope="col" style="width: 10%"><spring:message code="Hit"/></th>
            <th scope="col" style="width: 10%"><spring:message code="Good"/></th>
        </tr>
        </thead>
        <tbody id="list">
        </tbody>
    </table>

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
<!-- /.card-body -->

<input type="hidden" id="boardCategoryNo" value='${boardCategoryNo}' readonly="readonly"/>

<script src="js/write/list.js"></script>
