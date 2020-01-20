<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container mt-10">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="MultiMedia"/></h1>
        <div class="col-lg-12">

            <div class="card-body">
                <table class="table text-center">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col" style="width: 50%"><spring:message code="Title"/></th>
                        <th scope="col" style="width: 15%"><spring:message code="Writer"/></th>
                        <th scope="col" style="width: 15%"><spring:message code="Date"/></th>
                        <th scope="col" style="width: 10%"><spring:message code="Hit"/></th>
                        <th scope="col" style="width: 10%"><spring:message code="Good"/></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-left">제목</td>
                        <td>작성자</td>
                        <td>2020-01-14</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td class="text-left">제목</td>
                        <td>작성자</td>
                        <td>2020-01-14</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td class="text-left">제목</td>
                        <td>작성자</td>
                        <td>2020-01-14</td>
                        <td>0</td>
                        <td>100</td>
                    </tr>
                    </tbody>
                </table>

                <div class="page">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link"><</a></li>
                        <li class="page-item active"><a class="page-link">1</a></li>
                        <li class="page-item"><a class="page-link">1</a></li>
                        <li class="page-item"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link">3</a></li>
                        <li class="page-item"><a class="page-link">4</a></li>
                        <li class="page-item"><a class="page-link">5</a></li>
                        <li class="page-item"><a class="page-link">></a></li>
                    </ul>
                </div>

                <div class="mb-5">
                    <label class="float-right">
                        <input class="">
                        <button class="">검색</button>
                    </label>
                    <a class="float-right regBtn" style="clear: both">등록</a>
                </div>


            </div>
            <!-- /.card-body -->
        </div>
    </div>

    <script src="js/community/multiMedia.js"></script>
