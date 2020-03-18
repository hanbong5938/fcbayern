package com.football.fcbayern.util;


import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegularExpression {

    public List<String> attach(String content) {

        List<String> list = new ArrayList<>();

        try {
            Pattern pattern = Pattern.compile("src=[\"'](.*?)(\")");
            Matcher matcher = pattern.matcher(content);
            int i = 0;
            while (matcher.find()) {
                list.add(matcher.group(1));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    public String splitFileName(String content) {

        String string = "";

        try {

            Pattern pattern = Pattern.compile("fileName=(.*?)(&amp;)");

            Matcher matcher = pattern.matcher(content);


            while (matcher.find()) {
                string = matcher.group(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return string;
    }

    public String splitDirectory(String content) {

        String string = "";

        try {

            Pattern pattern = Pattern.compile("directory=(.*)");

            Matcher matcher = pattern.matcher(content);


            while (matcher.find()) {
                string = matcher.group(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return string;
    }
}
