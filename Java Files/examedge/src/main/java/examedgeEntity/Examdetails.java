package examedgeEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="Exam_Details")
public class Examdetails {
	
@Column(name="exam_id")
private int exid;

@Column(name="st_id")
private int stid;

@Column(name="ex_date")
private int exdate;

@Column(name="ex_level")
private int exlevel;

public int getExid() {
	return exid;
}

public void setExid(int exid) {
	this.exid = exid;
}

public int getStid() {
	return stid;
}

public void setStid(int stid) {
	this.stid = stid;
}

public int getExdate() {
	return exdate;
}

public void setExdate(int exdate) {
	this.exdate = exdate;
}

public int getExlevel() {
	return exlevel;
}

public void setExlevel(int exlevel) {
	this.exlevel = exlevel;
}


}