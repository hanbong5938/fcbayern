<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<div class="container">
    <div class="container-custom">
        <div class="col-lg-12">

            <input placeholder="카테고리">
            <input placeholder="이름">
            <input placeholder="등번호">
            <input placeholder="생일">

            <input type="button" id="btnSubmit" value="업로드"/>
            <div id="drop" style="border:1px solid black; width:800px; height:300px; padding:3px">
                사진 파일을 드래그해 주세요.
                <div id="thumbnails">
                </div>
            </div>

        </div>
    </div>

    <script src="js/write/profileReg.js"></script>
