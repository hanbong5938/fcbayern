package com.football.fcbayern.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProfileService {
    void insertImg(MultipartFile[] multipartFiles) throws Exception;
}
