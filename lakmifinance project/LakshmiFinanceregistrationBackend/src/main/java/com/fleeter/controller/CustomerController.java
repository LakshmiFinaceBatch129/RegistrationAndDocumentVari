package com.fleeter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fleeter.entities.customer.Customer;
import com.fleeter.repository.CustomerRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/Customer")
public class CustomerController {
	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@PostMapping("/")
	public Customer saveCustomer(@RequestBody Customer customer)
	{
		customer.getUser().setRole("customer");
		return customerRepository.save(customer);
	}
	
	@GetMapping("/")
	public List<Customer> getAllCustomer()
	{
		List<Customer> list=customerRepository.findAll();
		System.out.println(list);
		return list;
		
	}
	
	@GetMapping("/{id}")
	public Customer getCustomerById(@PathVariable("id") int id)
	{
		return customerRepository.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public void deleteCustomerById(@PathVariable("id") int id)
	{
		 customerRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public Customer updateCustomerById(@RequestBody Customer Customer,@PathVariable("id") int id)
	{
		Customer.getUser().setId(id);
		return customerRepository.save(Customer);
	}

//	@PostMapping("/login")
//	public Customer loginCustomer(@RequestBody loginRequest)
//	{
//		return customerRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
//	}
}
