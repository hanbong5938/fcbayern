package com.football.fcbayern.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class CustomErrorController implements ErrorController {


    @GetMapping("/error")
    public String errorPage(HttpServletRequest httpServletRequest) {
        Object status = httpServletRequest.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());

            if (statusCode == HttpStatus.NOT_FOUND.value()) {
                return getErrorPath() + "/error404";
            }

            if (statusCode == HttpStatus.FORBIDDEN.value()) {
                return getErrorPath() + "/error403";
            }

//            if(statusCode == HttpStatus.BAD_REQUEST.value()){
//                return getErrorPath() + "/error";
//            }
        }
        return getErrorPath()+"/error";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
