package com.examedge.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examedge.entity.Examdetails;

public interface ExamDetails extends JpaRepository<Examdetails, Integer> {
	
}
