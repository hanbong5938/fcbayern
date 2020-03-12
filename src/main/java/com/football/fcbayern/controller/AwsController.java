package com.football.fcbayern.controller;

import com.amazonaws.util.IOUtils;
import com.football.fcbayern.util.AwsS3Util;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

@RequestMapping("/aws")
@RestController
public class AwsController {

    private AwsS3Util awsS3Util  = new AwsS3Util();
    private final static String bucketName = "woolution";

    @GetMapping("/getImg")
    public ResponseEntity<byte[]> getImg(String fileName, String directory) throws Exception {

        InputStream inputStream = null;
        ResponseEntity<byte[]> responseEntity = null;
        HttpURLConnection httpURLConnection = null;

        String inputDirectory = null;
        inputDirectory = directory;
        try {
            HttpHeaders httpHeaders = new HttpHeaders();
            URL url;
            try {
                url = new URL(awsS3Util.getFileURL(bucketName, inputDirectory + fileName));
                httpURLConnection = (HttpURLConnection) url.openConnection();
                inputStream = httpURLConnection.getInputStream();
            } catch (Exception e) {
                //에러처리시
//              url = new URL(awsS3Util.getFileURL(bucketName, inputDirectory + fileName));
//              httpURLConnection = (HttpURLConnection)url.openConnection();
//              inputStream =  httpURLConnection.getInputStream();
                e.printStackTrace();
            }
            responseEntity = new ResponseEntity<byte[]>(IOUtils.toByteArray(inputStream), httpHeaders, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            responseEntity = new ResponseEntity<byte[]>(HttpStatus.BAD_REQUEST);
        } finally {
            assert inputStream != null;
            inputStream.close();
        }
        return responseEntity;
    }
}
