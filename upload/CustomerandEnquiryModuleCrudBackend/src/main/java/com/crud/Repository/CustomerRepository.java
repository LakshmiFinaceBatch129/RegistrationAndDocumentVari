package com.crud.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.Model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
