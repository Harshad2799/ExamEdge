package com.examedge.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examedge.entity.SubjectTable;

public interface SubjectRepository extends JpaRepository<SubjectTable, Integer> {


    
}
