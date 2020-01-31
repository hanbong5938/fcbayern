package com.football.fcbayern.util;

import java.io.File;
import java.text.DecimalFormat;
import java.util.Calendar;
import java.util.UUID;

public class UploadFileUtils {

    public static String uploadFile(String uploadPath, String originalName, byte[] bytes) throws Exception{

        AwsS3Util awsS3Util = new AwsS3Util();
        final String bucketName = "woolution";

        UUID uuid = UUID.randomUUID();

        String saveName = "/"+uuid.toString()+"_"+originalName;

        String savedPath = calendarPath(uploadPath);

        String uploadedFileName = (savedPath+ saveName).replace(File.separatorChar,'/');
        //AwsS3Util fileUpload 메서드를 사용해 업로드
        awsS3Util.fileUpload(bucketName, uploadPath+uploadedFileName, bytes);

        return uploadedFileName;
    }

    private static String calendarPath(String uploadPath){

        Calendar calendar = Calendar.getInstance();

        String yearPath = File.separator + calendar.get(Calendar.YEAR);

        String monthPath = yearPath + File.separator + new DecimalFormat("00").format(calendar.get(Calendar.MONTH) + 1);

        String datePath = monthPath + File.separator + new DecimalFormat("00").format(calendar.get(Calendar.DATE));

        mkdir(uploadPath, yearPath, monthPath, datePath);

        return datePath;
    }

    private static void mkdir(String uploadPath, String... paths ){ //... 동일한 파라미터 여러개 받을 경우 자동으로 배열 처리

        if (new File(paths[paths.length - 1]).exists()) {
            return;
        }

        for (String s: paths){
            File dirPath = new File(uploadPath + s);

            if(!dirPath.exists()){
                dirPath.mkdir();
            }
        }
    }
}
