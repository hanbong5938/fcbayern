<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container mb-5">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="News"/></h1>
        <div class="mb-5">
            <div class="boardContent">
                <div id="list">

                </div>
            </div>
        </div>

        <div id="pageArea" class="page">
        </div>

        <div class="mb-10">
            <label class="float-right">
                <select id="type">
                    <option value="t"><spring:message code="Title"/></option>
                    <option value="c"><spring:message code="Content"/></option>
                    <option value="w"><spring:message code="Writer"/></option>
                    <option value="tc"><spring:message code="Title"/> + <spring:message code="Content"/></option>
                    <option value="tcw"><spring:message code="All"/></option>
                </select>
                <input id="keyword" class="">
                <button id="searchBtn" class=""><spring:message code="Search"/></button>
            </label>
            <button id="regBtn" class="float-right regBtn btn btn-default" style="clear: both"><spring:message code="reg"/></button>
        </div>

    </div>
</div>

<script src="js/news/news.js"></script>
