package com.fleeter.entities.customer;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;
//	private String customerName;
//	private String customerMobileNo;
	private int customerLoanAmount;
	private String customerLoanType;
	private int tenure; 
	private int customerAge;
//	private String customerdDateOfBirth;
//	private String customerEmail;
	private String customerPancardNo;
	private String customerAdhardNo;
	private boolean verifybyoe=false;
	private String status="pending";
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
//	@OneToMany(cascade = CascadeType.ALL)
//	private Set<Address> address;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<ElectronicProducts> electronicProduct;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Bank> bank;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Guaranterdetails> guaranter;
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Previousloandetails> loandetails;
	
}