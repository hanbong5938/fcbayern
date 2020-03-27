<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>

<%@ include file="./includes/header.jsp" %>
<div class="">
    <div class="container-custom">
        <img class="img-heightAuto" src="images/background/bg_img.jpg" alt="" style="z-index:auto">
        <div class="desc">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4 animate-box">
                        <div class="feature-left">
							<span class="icon">
								<i class="icon-newspaper"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="News"/></h3>
                                <p><spring:message code="NewsExp"/></p>
                                <p><a class="newsLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 animate-box">
                        <div class="feature-left">
							<span class="icon">
								<i class="icon-search"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="FootBall"/></h3>
                                <p><spring:message code="FootBallExp"/></p>
                                <p><a class="footballLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 animate-box">
                        <div class="feature-left">
							<span class="icon">
								<i class="icon-bubbles2"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="FreeBoard"/></h3>
                                <p><spring:message code="FreeBoardExp"/></p>
                                <p><a class="footballLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 animate-box">

                        <div class="feature-left">
							<span class="icon">
								<i class="icon-youtube"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="MultiMedia"/></h3>
                                <p>><spring:message code="MultiMediaExp"/></p>
                                <p><a class="multiMediaLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 animate-box">
                        <div class="feature-left">
							<span class="icon">
								<i class="icon-notification2"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="Notice"/></h3>
                                <p><spring:message code="NoticeExp"/></p>
                                <p><a class="noticeLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 animate-box">
                        <div class="feature-left">
							<span class="icon">
								<i class="icon-cart2"></i>
							</span>
                            <div class="feature-copy">
                                <h3><spring:message code="IconShop"/></h3>
                                <p><spring:message code="IconShopExp"/></p>
                                <p><a class="iconShopLink href"><spring:message code="LearnMore"/></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<%@ include file="./includes/footer.jsp" %>

<script src="js/index.js"></script>
