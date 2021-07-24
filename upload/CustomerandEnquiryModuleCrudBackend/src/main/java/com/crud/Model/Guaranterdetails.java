package com.crud.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Guaranterdetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int guaranterId;
	private String guaranterName;
	private String guaranterAddress;
	private String guaranterRelationWithcustomer;
	private long guranterMobileNo;
	private long addharCardNo;
	private String pancardno;
	private String jobdetails;
	
	public int getGuaranterId() {
		return guaranterId;
	}
	public void setGuaranterId(int guaranterId) {
		this.guaranterId = guaranterId;
	}
	public String getGuaranterName() {
		return guaranterName;
	}
	public void setGuaranterName(String guaranterName) {
		this.guaranterName = guaranterName;
	}
	public String getGuaranterAddress() {
		return guaranterAddress;
	}
	public void setGuaranterAddress(String guaranterAddress) {
		this.guaranterAddress = guaranterAddress;
	}
	public String getGuaranterRelationWithcustomer() {
		return guaranterRelationWithcustomer;
	}
	public void setGuaranterRelationWithcustomer(String guaranterRelationWithcustomer) {
		this.guaranterRelationWithcustomer = guaranterRelationWithcustomer;
	}
	public long getGuranterMobileNo() {
		return guranterMobileNo;
	}
	public void setGuranterMobileNo(long guranterMobileNo) {
		this.guranterMobileNo = guranterMobileNo;
	}
	public long getAddharCardNo() {
		return addharCardNo;
	}
	public void setAddharCardNo(long addharCardNo) {
		this.addharCardNo = addharCardNo;
	}
	public String getJobdetails() {
		return jobdetails;
	}
	public void setJobdetails(String jobdetails) {
		this.jobdetails = jobdetails;
	}
	public String getPancardno() {
		return pancardno;
	}
	public void setPancardno(String pancardno) {
		this.pancardno = pancardno;
	}

	
}
