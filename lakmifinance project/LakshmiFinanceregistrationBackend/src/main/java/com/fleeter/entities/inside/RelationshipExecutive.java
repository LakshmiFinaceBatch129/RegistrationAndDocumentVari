package com.fleeter.entities.inside;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;
import com.fleeter.entities.customer.Customer;
import com.fleeter.entities.customer.EnquiryDetails;
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
public class RelationshipExecutive {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long reid;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "re")
	private OperationExecutive oe;
	
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Customer> customer;
	
	@OneToMany(cascade = CascadeType.ALL)
	private Set<EnquiryDetails> enquiry;
	


	

}

