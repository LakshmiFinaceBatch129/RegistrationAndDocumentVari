package com.fleeter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.customer.EnquiryDetails;
import com.fleeter.entities.inside.OperationExecutive;
import com.fleeter.entities.inside.RelationshipExecutive;

@Repository
public interface OperationalExecutiveRepository extends JpaRepository<OperationExecutive, Long> {

	public OperationExecutive findByUserId(int id);
	
}
