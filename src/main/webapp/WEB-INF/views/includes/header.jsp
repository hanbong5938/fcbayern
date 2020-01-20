<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>FC Bayern Korea</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="images/favicon.ico">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>

    <!-- Animate.css -->
    <link rel="stylesheet" href="css/animate.css">
    <!-- Icomoon Icon Fonts-->
    <link rel="stylesheet" href="css/icomoon.css">
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Superfish -->
    <link rel="stylesheet" href="css/superfish.css">
    <!-- Magnific Popup -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css">
    <!-- Date Picker -->
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
    <!-- CS Select -->
    <link rel="stylesheet" href="css/cs-select.css">
    <link rel="stylesheet" href="css/cs-skin-border.css">
    <%--Material Icon--%>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <%--dataTables--%>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
    <%--summernote--%>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-bs4.min.css" rel="stylesheet">

    <%--Flag--%>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css">


    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom.css">


</head>
<body>
<div id="fh5co-wrapper">
    <div id="fh5co-page">
        <header id="fh5co-header-section" class="sticky-banner">
            <div class="container">
                <div class="nav-header">
                    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                    <h1 id="fh5co-logo"><a href="/index">FC Bayern</a></h1>
                    <!-- START #fh5co-menu-wrap -->
                    <nav id="fh5co-menu-wrap" role="navigation">
                        <ul class="sf-menu" id="fh5co-primary-menu">
                            <li id="index" class="active"><a href="#"><spring:message code="Home"/></a></li>
                            <li>
                                <a href="#" class="fh5co-sub-ddown"><spring:message code="Club"/></a>
                                <ul class="fh5co-sub-menu">
                                    <li id="team"><a href="#"><spring:message code="Team"/></a></li>
                                    <li id="player"><a href="#"><spring:message code="Player"/></a></li>
                                    <li id="honours"><a href="#"><spring:message code="Honours"/></a></li>
                                </ul>
                            </li>
                            <li id="news"><a href="#"><spring:message code="News"/></a></li>
                            <li id="football"><a href="#"><spring:message code="FootBall"/></a></li>
                            <li>
                                <a href="#" class="fh5co-sub-ddown"><spring:message code="Community"/></a>
                                <ul class="fh5co-sub-menu">
                                    <li id="freeBoard"><a href="#"><spring:message code="FreeBoard"/></a></li>
                                    <li id="multiMedia"><a href="#"><spring:message code="MultiMedia"/></a></li>
                                    <li id="notice"><a href="#"><spring:message code="Notice"/></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="material-icons">
                                lock
                            </i></a></li>
                            <li>
                                <a id="langIcon" class="fh5co-sub-ddown" href="#">
                                    <i class="flag-icon flag-icon-kr mr-2"></i>
                                </a>
                                <ul class="fh5co-sub-menu">
                                    <li><a id="ko" class="dropdown-item set-language">
                                        <i class="flag-icon flag-icon-kr mr-2"></i> <spring:message code="ko"/>
                                    </a></li>
                                    <li><a id="en" class="dropdown-item set-language">
                                        <i class="flag-icon flag-icon-us mr-2"></i> <spring:message code="en"/>
                                    </a></li>
                                    <li><a id="de" class="dropdown-item set-language">
                                        <i class="flag-icon flag-icon-de mr-2"></i> <spring:message code="de"/>
                                    </a></li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <!-- end:header-top -->
        <div class="content">