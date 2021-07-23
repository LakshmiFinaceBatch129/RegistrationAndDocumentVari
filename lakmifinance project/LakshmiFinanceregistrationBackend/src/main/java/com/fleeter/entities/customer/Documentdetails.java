package com.fleeter.entities.customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Documentdetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int documentid;
	private int customerid;
	
	public int getCustomerid() {
		return customerid;
	}
	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}
	@Lob
	private byte[] pancard;
	@Lob
	private byte[] addharcard;
	@Lob
	private byte[] photo;
	@Lob
	private byte[] signature;
	
	@Lob
	private byte[] postdatedcheck;
	@Lob
	private byte[] thumb;
	@Lob
	private byte[] bankstatement;
	@Lob
	private byte[] itrfile;
	
	@Lob
	private byte[] salaryslip;
	@Lob
	private byte[] previousloanstatement;
	public int getDocumentid() {
		return documentid;
	}
	public void setDocumentid(int documentid) {
		this.documentid = documentid;
	}
	public byte[] getPancard() {
		return pancard;
	}
	public void setPancard(byte[] pancard) {
		this.pancard = pancard;
	}
	public byte[] getAddharcard() {
		return addharcard;
	}
	public void setAddharcard(byte[] addharcard) {
		this.addharcard = addharcard;
	}
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	public byte[] getPostdatedcheck() {
		return postdatedcheck;
	}
	public void setPostdatedcheck(byte[] postdatedcheck) {
		this.postdatedcheck = postdatedcheck;
	}
	public byte[] getThumb() {
		return thumb;
	}
	public void setThumb(byte[] thumb) {
		this.thumb = thumb;
	}
	public byte[] getBankstatement() {
		return bankstatement;
	}
	public void setBankstatement(byte[] bankstatement) {
		this.bankstatement = bankstatement;
	}
	public byte[] getItrfile() {
		return itrfile;
	}
	public void setItrfile(byte[] itrfile) {
		this.itrfile = itrfile;
	}
	public byte[] getSalaryslip() {
		return salaryslip;
	}
	public void setSalaryslip(byte[] salaryslip) {
		this.salaryslip = salaryslip;
	}
	public byte[] getPreviousloanstatement() {
		return previousloanstatement;
	}
	public void setPreviousloanstatement(byte[] previousloanstatement) {
		this.previousloanstatement = previousloanstatement;
	}
	
	
	
}
