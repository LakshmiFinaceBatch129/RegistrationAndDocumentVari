package com.fleeter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fleeter.entities.customer.CibilCheck;


public interface CibilCheckRepository extends JpaRepository<CibilCheck, Integer>{
	
	public CibilCheck findByCustomerPanNo(String pan);
	
	

}
