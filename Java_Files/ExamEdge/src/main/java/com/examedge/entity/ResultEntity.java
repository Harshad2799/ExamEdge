package com.examedge.entity;

public class ResultEntity {

	private int resultId;
//	Sub_id integer(5) *>* Subject_Tabel.Sub_id fk
//	Student_id integer(5) *>* Student_Details.Student_id fk
	private int mark;
	
	
	public int getResultId() {
		return resultId;
	}
	public void setResultId(int resultId) {
		this.resultId = resultId;
	}
	public int getMark() {
		return mark;
	}
	public void setMark(int mark) {
		this.mark = mark;
	}
	
	
}
