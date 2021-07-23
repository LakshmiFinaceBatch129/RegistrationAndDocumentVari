package com.fleeter.entities.customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Guaranterdetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int guaranterId;
	private String guaranterNmae;
	private String guaranterAddress;
	private String guaranterRelationWithcustomer;
	private long guranterMobileNo;
	private long addharCardNo;
	private String jobdetails;
	
}