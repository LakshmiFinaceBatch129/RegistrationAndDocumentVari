package com.crud.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.Model.Customer;
import com.crud.Repository.CustomerRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	CustomerRepository cr;
	
	@PostMapping("/postdata")
	public Customer savedata(@RequestBody Customer customer)
	{
		System.out.println(customer);
		Customer cus=cr.save(customer);
		return cus;
	}
	
	@GetMapping("/getalldata")
	public List<Customer> getalldata()
	{
		List<Customer> list=cr.findAll();
		return list;
	}
	
	@GetMapping("/getdata/{id}")
	public Customer getdata(@PathVariable ("id")int id)
	{
		Optional<Customer> opt=cr.findById(id);
		Customer customer =opt.get();
		return customer;
	}
	
	@PutMapping("/updatedata/{id}")
	public Customer updatedata(@RequestBody Customer cus, @PathVariable("id")int id)
	{
		cus.setCustomerid(id);
		Customer customer=cr.save(cus);
		return customer;
	}
	{
		
	}
}
