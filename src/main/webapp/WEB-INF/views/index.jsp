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
                                <p>FC 바이에른 뮌헨의 뉴스를 모아 놓은 게시판</p>
                                <p><a class="newsLink href"><spring:message code="LearnMore"/> </a></p>
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
                                <p>축구와 관련된 이야기를 나누는 게시판</p>
                                <p><a class="footballLink href">Learn More</a></p>
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
                                <p>자유로운 주제를 가지고 이야기하는 게시판</p>
                                <p><a class="footballLink href">Learn More</a></p>
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
                                <p>다양한 축구 영상과 사진을 감상하는 게시판</p>
                                <p><a class="multiMediaLink href">Learn More</a></p>
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
                                <p>가입 후 읽어 봐야할 공지사항에 대해 모아 놓은 게시판</p>
                                <p><a class="noticeLink href">Learn More</a></p>
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
                                <p>아이콘을 구매 할 수 있도록 만들어 놓은 곳</p>
                                <p><a href="#">Learn More</a></p>
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
