package com.fleeter.entities.inside;



import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
public class AccountHead {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ahid;

	@OneToOne(cascade = CascadeType.ALL)
	private User user;
	
	@OneToOne
	private OperationExecutive oe;
	
}
