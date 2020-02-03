package com.football.fcbayern.util;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.Protocol;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;

public class AwsS3Util {
    private static final String accessKey = "accessKey";
    private static final String secretKey = "secretKey";

    private AmazonS3 amazonS3;

    public AwsS3Util() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);
        ClientConfiguration clientConfiguration = new ClientConfiguration();
        clientConfiguration.setProtocol(Protocol.HTTP);
        this.amazonS3 = new AmazonS3Client(awsCredentials, clientConfiguration) {
        };
        amazonS3.setEndpoint("s3.ap-northeast-2.amazonaws.com");
    }

    public List<Bucket> getBucketList() {
        return amazonS3.listBuckets();
    }

    public Bucket createBucket(String bucketName) {
        return amazonS3.createBucket(bucketName);
    }

    public void createFolder(String bucketName, String folderName) {
        amazonS3.putObject(bucketName, folderName + "/", new ByteArrayInputStream(new byte[0]), new ObjectMetadata());
    }

    public void fileUpload(String bucketName, String fileName, byte[] fileData) throws FileNotFoundException {
        String filePath = (fileName).replace(File.separatorChar, '/');// 파일 구분자를 '/'으로 설정
        ObjectMetadata objectMetadata = new ObjectMetadata();

        objectMetadata.setContentLength(fileData.length); //메타데이터 설정 128kb -> 파일 크기만큼으로 변경
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(fileData);

        amazonS3.putObject(bucketName, filePath, byteArrayInputStream, objectMetadata);
    }

    public void fileDelete(String bucketName, String fileName) {
        String imgName = (fileName).replace(File.separatorChar, '/');
        amazonS3.deleteObject(bucketName, imgName);
        System.out.println("삭제 성공");
    }

    public String getFileURL(String bucketName, String fileName) {
        System.out.println("파일 명 : " + fileName);
        String imgName = (fileName).replace(File.separatorChar, '/');
        return amazonS3.generatePresignedUrl(new GeneratePresignedUrlRequest(bucketName, imgName)).toString();
    }

}
