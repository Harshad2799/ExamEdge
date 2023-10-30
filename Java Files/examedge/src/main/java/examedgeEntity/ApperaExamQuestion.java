package examedgeEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="Apper_Exam_Questions")
public class ApperaExamQuestion {

	@Column(name="sr_no")
	private int srno;
	
	@Column(name="ex_id")
	private int exid;
	
	@Column(name="Q_id")
	private int Qid;
	
	@Column(name="level")
	private String level;
	
	@Column(name="stu_ans")
	private String stuans;
	
	@Column(name="correct_ans")
	private String correctans;

	public int getSrno() {
		return srno;
	}

	public void setSrno(int srno) {
		this.srno = srno;
	}

	public int getExid() {
		return exid;
	}

	public void setExid(int exid) {
		this.exid = exid;
	}

	public int getQid() {
		return Qid;
	}

	public void setQid(int qid) {
		Qid = qid;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getStuans() {
		return stuans;
	}

	public void setStuans(String stuans) {
		this.stuans = stuans;
	}

	public String getCorrectans() {
		return correctans;
	}

	public void setCorrectans(String correctans) {
		this.correctans = correctans;
	}
	
}
