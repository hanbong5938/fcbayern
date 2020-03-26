<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container">
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

        <div id="profileList">

        </div>

        <button id="profileReg" class="btn-info">등록</button>
    </div>
</div>
<script src="js/club/player.js"></script>
