package com.crud.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Previousloandetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int previousLoanamount;
	private String previousLoanStatus;
	private int tenure;
	private int paidAmount;
	private int reaminingAmount;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Bank> bank;
	


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPreviousLoanamount() {
		return previousLoanamount;
	}
	public void setPreviousLoanamount(int previousLoanamount) {
		this.previousLoanamount = previousLoanamount;
	}
	public String getPreviousLoanStatus() {
		return previousLoanStatus;
	}
	public void setPreviousLoanStatus(String previousLoanStatus) {
		this.previousLoanStatus = previousLoanStatus;
	}
	public int getTenure() {
		return tenure;
	}
	public void setTenure(int tenure) {
		this.tenure = tenure;
	}
	public int getPaidAmount() {
		return paidAmount;
	}
	public void setPaidAmount(int paidAmount) {
		this.paidAmount = paidAmount;
	}
	public int getReaminingAmount() {
		return reaminingAmount;
	}
	public void setReaminingAmount(int reaminingAmount) {
		this.reaminingAmount = reaminingAmount;
	}
	public Set<Bank> getBank() {
		return bank;
	}
	public void setBank(Set<Bank> bank) {
		this.bank = bank;
	}
	

	
}
