<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container mt-10">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="FirstTeam"/></h1>
        <div class="img-wrapper">
            <img class="img-heightAuto" src="images/player/firstTeam.webp"
                 alt="" title="">
            <div class="col-xs-12">
                <p class="img-description">
                    <span class="title bold"><spring:message code="BR"/></span>
                    Toni Tapalovic, Niklas Süle, Benjamin Pavard, Leon Goretzka, Corentin Tolisso, Thiago, Javi
                    Martinez, Jerome Boateng, Lukas Mai, Kingsley Coman, Michael Cuisance, Danny Röhl, Hansi Flick,
                    Holger Broich<br/>
                    <span class="title bold"><spring:message code="FR"/></span>
                    Christian Früchtl, Fiete Arp, Philippe Coutinho, Alphonso Davies, Robert Lewandowski, Thomas Müller,
                    Manuel Neuer, David Alaba, Serge Gnabry, Lucas Hernandez, Ivan Perisic, Joshua Kimmich, Sven
                    Ulreich, Ron-Thorben Hoffmann
                </p>
            </div>
        </div>

        <div class="container-custom mt-5">
            <div class="item-titles-wrapper">
                <ul class="item-titles btn-group-sm">
                    <li class="active item btn">
                        <a><spring:message code="All"/></a>
                    </li>
                    <li class="item btn">
                        <a><spring:message code="GoalKeepers"/></a>
                    </li>
                    <li class="item btn">
                        <a><spring:message code="Defenders"/></a>
                    </li>
                    <li class="item btn">
                        <a><spring:message code="Midfielders"/></a>
                    </li>
                    <li class="item btn">
                        <a><spring:message code="Forwards"/></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-custom">
            <h1 class="bold profile-category">GOALKEEPERS</h1>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="profile-img text-center">
                            <img src="images/player/Neuer.webp" alt="">
                            <div>
                                <span class="text-primary">Manuel Neuer</span></div>
                            <div>
                                <span>27/03/1986</span>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-3">

                    </div>
                    <div class="col-lg-3">

                    </div>
                    <div class="col-lg-3">

                    </div>
                </div>
            </div>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">DEFENDERS</h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">MIDFIELDERS</h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">FORWARDS</h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">
                SPORTING DIRECTOR
            </h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">COACHES</h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">FUNCTIONAL</h1>
        </div>
        <div class="container-custom">
            <h1 class="bold profile-category">MASCOTS</h1>
        </div>

    </div>
</div>

<script src="js/club/player.js"></script>
