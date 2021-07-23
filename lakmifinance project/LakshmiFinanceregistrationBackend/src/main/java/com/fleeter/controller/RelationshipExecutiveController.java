package com.fleeter.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

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
import com.fleeter.entities.customer.EnquiryDetails;
import com.fleeter.entities.inside.RelationshipExecutive;
import com.fleeter.repository.RelashionshipExecutiveRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/relationshipExecutive")
public class RelationshipExecutiveController {
	
	
	@Autowired
	private RelashionshipExecutiveRepository relashionshipExecutiveRepository;
	
	private static RelationshipExecutive re;
	
	@PostMapping("/")
	public RelationshipExecutive saveRelationshipExecutive(@RequestBody RelationshipExecutive relationshipExecutive)
	{
		relationshipExecutive.getUser().setRole("relationshipExecutive");
		return relashionshipExecutiveRepository.save(relationshipExecutive);
	}
	
	@GetMapping("/")
	public List<RelationshipExecutive> getAllApplicant()
	{
		List<RelationshipExecutive> list=relashionshipExecutiveRepository.findAll();
		System.out.println(list);
		return list;
	}
	
	@GetMapping("/{id}")
	public RelationshipExecutive getRelationshipExecutiveById(@PathVariable("id") Long id)
	{
		return relashionshipExecutiveRepository.findById(id).get();
	} 
	@GetMapping("/byuserid/{id}")
	public RelationshipExecutive getRelationshipExecutiveByUserId(@PathVariable("id") int id)
	{
		this.re=relashionshipExecutiveRepository.findByUserId(id);
		return re;
	}
	
	@DeleteMapping("/{id}")
	public void deleteRelationshipExecutiveById(@PathVariable("id") Long id)
	{
		relashionshipExecutiveRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public RelationshipExecutive updateRelationshipExecutiveById(@RequestBody RelationshipExecutive relationshipExecutive,@PathVariable("id") int id)
	{
		relationshipExecutive.getUser().setId(id);
		return relashionshipExecutiveRepository.save(relationshipExecutive);
	}
	
	@PostMapping("/addcustomer")
	public RelationshipExecutive savecustomer(@RequestBody Customer customer)
	{
		customer.getUser().setRole("c");
//		RelationshipExecutive relationshipExecutive=getRelationshipExecutiveById(id);
//		relationshipExecutive.getCustomer().add(customer);
		this.re.getCustomer().add(customer);
		return relashionshipExecutiveRepository.save(this.re);
	}
	
	@GetMapping("/getcustomer")
	public List<Customer> getAllCustomer()
	{
//		RelationshipExecutive relationshipExecutive=getRelationshipExecutiveById(id);
		Set<Customer> set=this.re.getCustomer();
		List<Customer> list=new ArrayList<Customer>(set);
		return list;
	}
	@PutMapping("/{id}/updatecustomer")
	public RelationshipExecutive updatecustomer(@PathVariable("id") Long id,@RequestBody Customer customer)
	{
		RelationshipExecutive relationshipExecutive=getRelationshipExecutiveById(id);
		relationshipExecutive.getCustomer().add(customer);
		return relashionshipExecutiveRepository.save(relationshipExecutive);
	}
	@PostMapping("/addenquiry")
	public RelationshipExecutive saveEnquiry(@RequestBody EnquiryDetails enquiry)
	{
//		RelationshipExecutive relationshipExecutive=getRelationshipExecutiveById(id);
//		relationshipExecutive.getEnquiry().add(enquiry);
		this.re.getEnquiry().add(enquiry);
		return relashionshipExecutiveRepository.save(this.re);
	}
	
	@GetMapping("/getenquiry")
	public Set<EnquiryDetails> getAllEnquiry()
	{
//		RelationshipExecutive relationshipExecutive=getRelationshipExecutiveById(id);
		return this.re.getEnquiry();
	}
	
}
