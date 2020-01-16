<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="container mt-10">
    <div class="container-custom">
        <h1 class="headline"><spring:message code="FootBall"/></h1>
        <div class="col-lg-12">

            <div class="card-body">
                <table id="myTable" class="display table">
                    <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Row 1 Data 1</td>
                        <td>Row 1 Data 2</td>
                    </tr>
                    <tr>
                        <td>Row 2 Data 1</td>
                        <td>Row 2 Data 2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->

        </div>
    </div>
</div>

<script src="js/football/football.js"></script>
