package com.football.fcbayern.service;

import com.football.fcbayern.mapper.BoardAttachMapper;
import com.football.fcbayern.util.RegularExpression;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardAttachServiceImpl implements BoardAttachService {

    private BoardAttachMapper boardAttachMapper;

    @Autowired
    public void setBoardAttachMapper(BoardAttachMapper boardAttachMapper) {
        this.boardAttachMapper = boardAttachMapper;
    }

    RegularExpression regularExpression = new RegularExpression();

    @Override
    public void insertInfo(List<String> list) {
        for (String s : list) {
            boardAttachMapper.insertInfo(regularExpression.splitFileName(s), regularExpression.splitDirectory(s));
        }
    }
}
