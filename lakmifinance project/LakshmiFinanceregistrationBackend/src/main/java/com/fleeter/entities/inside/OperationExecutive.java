package com.fleeter.entities.inside;



import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
public class OperationExecutive {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long oeid;
	
	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL)
	private RelationshipExecutive re;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cm_id")
	private CreditManager cm;
	
	
}
