package com.examedge.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examedge.entity.StudentDetails;

public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Integer> {


    
}
