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
    <link rel="stylesheet" href="css/bootstrap.css">
    <%--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"--%>
    <%--          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">--%>
    <%--Material Icon--%>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <%--dataTables--%>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
    <%--summernote--%>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-bs4.min.css" rel="stylesheet">
    <%--Flag--%>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css">

    <%--custom css--%>
    <link rel="stylesheet" href="css/custom.css">

</head>
<body>
<div class="wrapper">
    <div class="page">
        <header class="header-section navbar-fix">
            <div class="container pt-3 pb-3">
                <div class="navbar-header">
                    <div class="row col-lg-12">
                        <h1 class="logo mr-auto"><a href="/index">FC Bayern</a></h1>
                        <nav class="navbar navbar-expand-lg nav-text-color" role="navigation">
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                    data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i class="icon-menu"></i>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarMenu">
                                <ul class="navbar-nav ">
                                    <a class="activeLink font-do mr-2" id="index" href="#"><spring:message
                                            code="Home"/></a>

                                    <li class="nav-item active mr-2">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle font-do" href="#"
                                               id="club" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <spring:message code="Club"/>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="club">
                                                <a id="team" class="dropdown-item" href="#"><spring:message
                                                        code="Team"/></a>
                                                <a id="player" class="dropdown-item" href="#"><spring:message
                                                        code="Player"/></a>
                                                <a id="honours" class="dropdown-item" href="#"><spring:message
                                                        code="Honours"/></a>
                                            </div>
                                        </div>

                                    </li>
                                    <li class="nav-item mr-2">
                                        <a id="news" class="font-do" href="#"><spring:message code="News"/></a>
                                    </li>
                                    <li class="nav-item mr-2">
                                        <a id="football" class="font-do" href="#"><spring:message
                                                code="FootBall"/></a>
                                    </li>
                                    <li class="nav-item mr-2">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle font-do" href="#"
                                               id="community" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <spring:message code="Community"/>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="community">
                                                <a id="freeBoard" class="dropdown-item" href="#"><spring:message
                                                        code="FreeBoard"/></a>
                                                <a id="multiMedia" class="dropdown-item" href="#"><spring:message
                                                        code="MultiMedia"/></a>
                                                <a id="notice" class="dropdown-item" href="#"><spring:message
                                                        code="Notice"/></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item mr-2">
                                        <a href="#"><i class="material-icons">
                                            lock
                                        </i></a>
                                    </li>
                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle" href="#"
                                               id="langIcon" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <i class="flag-icon flag-icon-kr mr-2"></i>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="langIcon">
                                                <a id="ko" class="dropdown-item set-language">
                                                    <i class="flag-icon flag-icon-kr mr-2"></i> <spring:message
                                                        code="ko"/>
                                                </a>
                                                <a id="en" class="dropdown-item set-language">
                                                    <i class="flag-icon flag-icon-us mr-2"></i> <spring:message
                                                        code="en"/>
                                                </a>
                                                <a id="de" class="dropdown-item set-language">
                                                    <i class="flag-icon flag-icon-de mr-2"></i> <spring:message
                                                        code="de"/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <!-- end:header-top -->
        <div class="content">