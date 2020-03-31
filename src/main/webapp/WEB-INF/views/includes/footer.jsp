</div>

<div id="modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog mt-10" style="width:20rem; border-radius:20px;">
        <div class="modal-content">
        </div>
    </div>
</div>


<footer>
    <div class="footer mt-5">
        <div class="container">
            <div class="row row-bottom-padded-md">
                <div class="col-md-2 col-sm-2 col-xs-12">
                    <h3>About FCB</h3>
                    <p><spring:message code="footerInfo"/></p>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 footer-link">
                    <h3><spring:message code="Club"/></h3>
                    <ul>
                        <li><a class="teamLink href"><spring:message code="Team"/></a></li>
                        <li><a class="playerLink href"><spring:message code="Player"/></a></li>
                        <li><a class="honoursLink href"><spring:message code="Honours"/></a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 footer-link">
                    <h3><spring:message code="News"/></h3>
                    <ul>
                        <li><a class="newsLink href"><spring:message code="News"/></a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 footer-link">
                    <h3><spring:message code="FootBall"/></h3>
                    <ul>
                        <li><a class="footballLink href"><spring:message code="FootBall"/></a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 footer-link">
                    <h3><spring:message code="Community"/></h3>
                    <ul>
                        <li><a class="freeBoardLink href"><spring:message code="FreeBoard"/></a></li>
                        <li><a class="multiMediaLink href"><spring:message code="MultiMedia"/></a></li>
                        <li><a class="noticeLink href"><spring:message code="Notice"/></a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12 footer-link">
                    <h3><spring:message code="IconShop"/></h3>
                    <ul>
                        <li><a class="iconShopLink href"><spring:message code="IconShop"/></a></li>
                        <li><a class="iconStorageLink href"><spring:message code="IconStorage"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 text-center footer-link">
                    <p>
                        <a href="https://github.com/uru1217/fcbayern"><i class="icon-github social-icon"></i></a>
                    </p>
                    by <i class="fa fa-love"></i><a href="">FCB Korea</a>
                </div>
            </div>
        </div>
    </div>
</footer>


</div>
<!-- END fh5co-page -->

</div>
<!-- END fh5co-wrapper -->

<%--aws s3--%>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.283.1.min.js"></script>
<!-- Modernizr JS 브라우저 판별-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
<!-- FOR IE9 below -->
<%--ie에서도 사용가능하도록--%>
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<!-- jQuery -->
<script src="plugin/jquery.min.js"></script>
<!-- jQuery Easing 움직임 효과 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
<%--Proper--%>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<!-- Bootstrap -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
<!-- Waypoints -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<!-- Stellar -->
<script src="https://cdn.jsdelivr.net/npm/jquery.stellar@0.6.2/jquery.stellar.min.js"></script>
<%--summernote --%>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote-bs4.min.js"></script>
<!-- include summernote-ko-KR -->
<%--<script src="lang/summernote-ko-KR.js"></script>--%>

<%--iziToast--%>
<script src="plugin/iziToast.min.js"></script>

<%--Footer--%>
<script src="js/includes/footer.js"></script>


</body>
</html>