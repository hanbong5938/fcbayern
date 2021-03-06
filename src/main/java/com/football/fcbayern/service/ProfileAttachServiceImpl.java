package com.football.fcbayern.service;

import com.football.fcbayern.mapper.ProfileAttachMapper;
import com.football.fcbayern.mapper.ProfileMapper;
import com.football.fcbayern.model.ProfileAttachModel;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProfileAttachServiceImpl implements ProfileAttachService {

    private ProfileAttachMapper profileAttachMapper;

    @Override
    public int insert(ProfileAttachModel profileAttachModel) {
       return profileAttachMapper.insert(profileAttachModel);
    }

    @Override
    public List<ProfileAttachModel> getAttachList() {
        return profileAttachMapper.getAttachList();
    }
}
