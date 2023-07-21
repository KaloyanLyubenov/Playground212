package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;
import com.example.playgroundv3.domain.entites.MediaTypeEntity;
import com.example.playgroundv3.repos.FormatTypeRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FormatTypeService {

    private final FormatTypeRepo formatTypeRepo;
    private Map<String, Integer> availableFormatTypes;

    public FormatTypeService(FormatTypeRepo formatTypeRepo) {
        this.formatTypeRepo = formatTypeRepo;
    }

    @PostConstruct
    public void initFormatTypes() {
        this.availableFormatTypes = mapTypes(this.formatTypeRepo.findAllFormatTypes());
    }

    private static Map<String, Integer> mapTypes(List<FormatTypeEntity> types){
        Map<String, Integer> typesMap = new HashMap<>();
        for(FormatTypeEntity formatType : types){
            typesMap.put(formatType.getFormatType(), formatType.getId());
        }

        return typesMap;
    }

    public List<String> getAllFormatTypes(){
        List<String> types = new ArrayList<>();
        for(Map.Entry<String, Integer> entry : this.availableFormatTypes.entrySet()){
            types.add(entry.getKey());
        }
        return types;
    }

    public String getFormatNameById(int id) {
        for(Map.Entry<String, Integer> format : this.availableFormatTypes.entrySet()){
            if(format.getValue() == id){
                return format.getKey();
            }
        }
        return null;
    }

    public int getFormatTypeIdByName(String formatTypeName) {
        return this.availableFormatTypes.get(formatTypeName);
    }
}
