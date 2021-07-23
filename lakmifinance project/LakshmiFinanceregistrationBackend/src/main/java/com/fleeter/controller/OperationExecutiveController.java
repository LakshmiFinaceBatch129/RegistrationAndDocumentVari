package com.fleeter.controller;

import java.util.Iterator;
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

import com.fleeter.entities.customer.CibilCheck;
import com.fleeter.entities.customer.Customer;
import com.fleeter.entities.customer.EnquiryDetails;
import com.fleeter.entities.inside.OperationExecutive;
import com.fleeter.entities.inside.RelationshipExecutive;
import com.fleeter.repository.CibilCheckRepository;
import com.fleeter.repository.OperationalExecutiveRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/operationExecutive")
public class OperationExecutiveController {
	
	
	@Autowired
	private OperationalExecutiveRepository operationalExecutiveRepository;
	@Autowired
	private CibilCheckRepository cibilcheckrepository;
	
	private OperationExecutive oe;
	@PostMapping("/")
	public OperationExecutive saveOperationExecutive(@RequestBody OperationExecutive operationExecutive)
	{
		operationExecutive.getUser().setRole("operationExecutive");
		return operationalExecutiveRepository.save(operationExecutive);
	}
	
	@GetMapping("/")
	public List<OperationExecutive> getAllOperationExecutive()
	{
		return operationalExecutiveRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public OperationExecutive getOperationExecutiveById(@PathVariable("id") Long id)
	{
		return operationalExecutiveRepository.findById(id).get();
	}
	@GetMapping("/byuserid/{id}")
	public OperationExecutive getRelationshipExecutiveByUserId(@PathVariable("id") int id)
	{
		this.oe=operationalExecutiveRepository.findByUserId(id);
		return oe;
	}
	
	@DeleteMapping("/{id}")
	public void deleteOperationExecutiveById(@PathVariable("id") Long id)
	{
		 operationalExecutiveRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public OperationExecutive updateOperationExecutiveById(@RequestBody OperationExecutive operationExecutive,@PathVariable("id") int id)
	{
		operationExecutive.getUser().setId(id);
		return operationalExecutiveRepository.save(operationExecutive);
	}
	@PutMapping("/{id}/updatecustomer")
	public OperationExecutive updatecustomer(@PathVariable("id") Long id,@RequestBody Customer customer)
	{
		OperationExecutive operationExecutive=getOperationExecutiveById(id);
		Set<Customer> list= operationExecutive.getRe().getCustomer();
		for (Customer customer2 : list) {
			if(customer2.getCustomerId()==customer.getCustomerId()) {
				customer2.setVerifybyoe(true);
				customer2.setStatus("approve");
			}
		}
		return operationalExecutiveRepository.save(operationExecutive);
	}
	@GetMapping("/{id}/getcustomers")
	public Set<Customer> getAllCustomer(@PathVariable("id") Long id)
	{
		OperationExecutive operationalExecutive=getOperationExecutiveById(id);
		return operationalExecutive.getRe().getCustomer();
	}
	@GetMapping("/{id}/getenquiry")
	public Set<EnquiryDetails> getAllEnquiry(@PathVariable("id") Long id)
	{
		OperationExecutive operationalExecutive=getOperationExecutiveById(id);
		return operationalExecutive.getRe().getEnquiry();
	}
	@GetMapping("/{id}/{enq_id}")
	public EnquiryDetails getEnquiry(@PathVariable("id") Long id, @PathVariable("enq_id") int enq_id)
	{
		OperationExecutive operationalExecutive=getOperationExecutiveById(id);
		Set<EnquiryDetails> set=operationalExecutive.getRe().getEnquiry();
		for (EnquiryDetails enquiryDetails : set) {
			if(enquiryDetails.getEnq_id()==enq_id)
			return enquiryDetails;
		}
		return new EnquiryDetails();
	}
	@PutMapping("/{id}/updateEnquiry")
	public OperationExecutive updateEnquiry(@PathVariable("id") Long id,@RequestBody EnquiryDetails enquiry)
	{
		OperationExecutive operationExecutive=getOperationExecutiveById(id);
		Set<EnquiryDetails> list= operationExecutive.getRe().getEnquiry();
		for (EnquiryDetails enquiry1 : list) {
			if(enquiry1.getEnq_id()==enquiry.getEnq_id()) {
				enquiry1.setStatus(enquiry.getStatus());
		}
		}
		System.out.println(operationExecutive);
		return operationalExecutiveRepository.save(operationExecutive);
	}
	@GetMapping("/checkcibil/{pan}")
	public CibilCheck checkScore(@PathVariable("pan")String pan) 
	{
		CibilCheck cc= cibilcheckrepository.findByCustomerPanNo(pan);
		if(cc!=null) {
			return cc;
		}
		else {
			int x=(int)(Math.random()*1000);
			CibilCheck cc1=new CibilCheck();
			cc1.setCustomerPanNo(pan);
			if(x>500) {
				cc1.setScore(x);
				cc1.setCibilStatus("Cibil Good");
				cc1.setRemark("good");
				return cibilcheckrepository.save(cc1);
			}
			else {
				cc1.setScore(x);
				cc1.setCibilStatus("Cibil Bad");
				cc1.setRemark("bad");
				return cibilcheckrepository.save(cc1);
			}
		}
	}
}
