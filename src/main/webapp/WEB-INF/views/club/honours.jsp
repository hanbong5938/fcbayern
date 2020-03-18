<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="Honours"/></h1>
        <h5>National Honours</h5>
        <div class="col-lg-12">
            <div id="nationalHonours">

            </div>
        </div>
        <br/>
        <h5 class="mt-5">International Honours</h5>
        <div class="col-lg-12">
            <div id="internationalHonours">

            </div>
        </div>

    </div>
</div>

<button class="btn btn-primary" id="honoursReg"><spring:message code="reg"/></button>

<script src="js/club/honours.js"></script>
