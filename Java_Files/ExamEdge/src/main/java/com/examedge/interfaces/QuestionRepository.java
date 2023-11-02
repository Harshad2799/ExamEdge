package com.examedge.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examedge.entity.QuestionEntity;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer>{


    
}
