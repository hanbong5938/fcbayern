package com.football.fcbayern.controller;

import com.amazonaws.util.IOUtils;
import com.football.fcbayern.model.ProfileAttachModel;
import com.football.fcbayern.service.ProfileAttachService;
import com.football.fcbayern.service.ProfileService;
import com.football.fcbayern.util.AwsS3Util;
import com.football.fcbayern.util.UploadFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

@RequestMapping("/profileAttach")
@RestController
public class ProfileAttachController {

    private ProfileService profileService;
    private ProfileAttachService profileAttachService;
    private AwsS3Util awsS3Util = new AwsS3Util();
    private final static String bucketName = "woolution";

    @Autowired
    public void setProfileService(ProfileService profileService) {
        this.profileService = profileService;
    }

    @Autowired
    public void setProfileAttachService(ProfileAttachService profileAttachService) {
        this.profileAttachService = profileAttachService;
    }

    @PostMapping(value = "/insertAttachInfo", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> insertInfo(@RequestBody ProfileAttachModel profileAttachModel) {
        System.out.println(profileAttachModel);
        int count = profileAttachService.insert(profileAttachModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(value = "/insertImg", produces = "text/plain;charset=UTF-8")
    public String uploadAjaxCertificate(MultipartFile uploadFile) throws Exception {

        String uploadPath = "profileAttach";

        ResponseEntity<String> img_path = new ResponseEntity<>(
                UploadFileUtils.uploadFile(uploadPath, uploadFile.getOriginalFilename(), uploadFile.getBytes()),
                HttpStatus.CREATED);

        return img_path.getBody();
    }

    @GetMapping("/getImg")
    public ResponseEntity<byte[]> getImg(String fileName, String directory) throws Exception {
        System.out.println(directory);

        InputStream inputStream = null;
        ResponseEntity<byte[]> responseEntity = null;
        HttpURLConnection httpURLConnection = null;
        System.out.println(fileName);

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
