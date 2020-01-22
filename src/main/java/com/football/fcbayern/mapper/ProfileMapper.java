package com.football.fcbayern.mapper;

import org.springframework.web.multipart.MultipartFile;

public interface ProfileMapper {

    void insertImg(MultipartFile[] multipartFiles);

}
