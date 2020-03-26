<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
    <div class="container-custom">
        <div class="col-lg-12">

            <label>
                <input id="iconNm" type="text" placeholder="Insert Icon Name">
            </label>
            <label>
                <input id="iconPrice" type="number" placeholder="Insert Icon Price">
            </label>
            <label>
                <input id="iconCnt" type="number" placeholder="Insert Icon Count">
            </label>

            <button id="btnSubmit" class="btn btn-default"><spring:message code="reg"/></button>
            <div id="drop" style="border:1px solid black; width:800px; height:300px; padding:3px">
                사진 파일을 드래그해 주세요.
                <div id="thumbnails">
                </div>
            </div>

        </div>
    </div>
</div>

<script src="js/iconShop/iconShopReg.js"></script>
