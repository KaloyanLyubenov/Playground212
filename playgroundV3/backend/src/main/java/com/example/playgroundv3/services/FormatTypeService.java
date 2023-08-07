package com.example.playgroundv3.services;

import com.example.playgroundv3.domain.entites.FormatTypeEntity;
import com.example.playgroundv3.repos.FormatTypeRepo;
import jakarta.annotation.PostConstruct;
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
}
