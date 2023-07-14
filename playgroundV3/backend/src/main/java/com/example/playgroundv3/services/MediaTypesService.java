package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.entites.MediaTypeEntity;
import com.example.playgroundv3.domain.entites.UserRoleEntity;
import com.example.playgroundv3.repos.MediaTypeRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MediaTypesService {

    private Map<String, Integer> availableMediaTypes;
    private final MediaTypeRepo mediaTypeRepo;

    public MediaTypesService(MediaTypeRepo mediaTypeRepo) {
        this.mediaTypeRepo = mediaTypeRepo;
    }

    @PostConstruct
    public void initRoles(){
        this.availableMediaTypes = mapTypes(this.mediaTypeRepo.findAllMediaTypes());
    }

    private static Map<String, Integer> mapTypes(List<MediaTypeEntity> types){
        Map<String, Integer> typesMap = new HashMap<>();
        for(MediaTypeEntity mediaType : types){
            typesMap.put(mediaType.getMediaType(), mediaType.getId());
        }

        return typesMap;
    }

    public List<String> getAllMediaTypes(){
        List<String> types = new ArrayList<>();
        for(Map.Entry<String, Integer> entry : this.availableMediaTypes.entrySet()){
            types.add(entry.getKey());
        }
        return types;
    }

    public int getMediaTypeIdByName(String mediaTypeName) {
        return this.availableMediaTypes.get(mediaTypeName);
    }
}
