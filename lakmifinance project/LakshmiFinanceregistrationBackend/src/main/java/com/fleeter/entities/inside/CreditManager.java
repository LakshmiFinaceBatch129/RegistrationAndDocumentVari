package com.fleeter.entities.inside;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;
import com.fleeter.entities.customer.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties
@JsonIgnoreType(value = true)
public class CreditManager {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cmid;

	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	//bidirectional mapping with oe-re-customer
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "cm")
	private OperationExecutive oe;
	
	
	//set<loaofile> loanfile-customer
	// ah-oe-cm-loanfile-customer
	
	
}
