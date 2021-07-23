package com.fleeter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fleeter.entities.inside.CreditManager;

@Repository
public interface CreditManagerRepository extends JpaRepository<CreditManager, Integer> {

}
