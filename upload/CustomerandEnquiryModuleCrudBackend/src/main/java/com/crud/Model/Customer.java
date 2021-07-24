package com.crud.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int customerid;
	private int customerLoanAmount;
	private String customerLoanType;
	private int tenure; 
	private int customerAge;
	private String customerPancardNo;
	private String customerAdhardNo;
	private boolean verifybyoe=false;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<ElectronicProducts> electronicProduct;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Bank> bank;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Guaranterdetails> guaranter;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Previousloandetails> loandetails;
	public int getCustomerid() {
		return customerid;
	}
	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}
	public int getCustomerLoanAmount() {
		return customerLoanAmount;
	}
	public void setCustomerLoanAmount(int customerLoanAmount) {
		this.customerLoanAmount = customerLoanAmount;
	}
	public String getCustomerLoanType() {
		return customerLoanType;
	}
	public void setCustomerLoanType(String customerLoanType) {
		this.customerLoanType = customerLoanType;
	}
	public int getTenure() {
		return tenure;
	}
	public void setTenure(int tenure) {
		this.tenure = tenure;
	}
	public int getCustomerAge() {
		return customerAge;
	}
	public void setCustomerAge(int customerAge) {
		this.customerAge = customerAge;
	}
	public String getCustomerPancardNo() {
		return customerPancardNo;
	}
	public void setCustomerPancardNo(String customerPancardNo) {
		this.customerPancardNo = customerPancardNo;
	}
	public String getCustomerAdhardNo() {
		return customerAdhardNo;
	}
	public void setCustomerAdhardNo(String customerAdhardNo) {
		this.customerAdhardNo = customerAdhardNo;
	}
	public boolean isVerifybyoe() {
		return verifybyoe;
	}
	public void setVerifybyoe(boolean verifybyoe) {
		this.verifybyoe = verifybyoe;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Set<ElectronicProducts> getElectronicProduct() {
		return electronicProduct;
	}
	public void setElectronicProduct(Set<ElectronicProducts> electronicProduct) {
		this.electronicProduct = electronicProduct;
	}
	public Set<Bank> getBank() {
		return bank;
	}
	public void setBank(Set<Bank> bank) {
		this.bank = bank;
	}
	public Set<Guaranterdetails> getGuaranter() {
		return guaranter;
	}
	public void setGuaranter(Set<Guaranterdetails> guaranter) {
		this.guaranter = guaranter;
	}
	public Set<Previousloandetails> getLoandetails() {
		return loandetails;
	}
	public void setLoandetails(Set<Previousloandetails> loandetails) {
		this.loandetails = loandetails;
	}

	
	
}
