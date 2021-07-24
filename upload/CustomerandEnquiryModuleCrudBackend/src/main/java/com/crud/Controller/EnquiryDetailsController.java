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

import com.crud.Model.EnquiryDetails;
import com.crud.Repository.EnquiryDetailsRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/enquiry")
public class EnquiryDetailsController {

	@Autowired
	EnquiryDetailsRepository er;
	
	@PostMapping("/postdata")
	public EnquiryDetails saveenquiry(@RequestBody EnquiryDetails enquiry)
	{
		EnquiryDetails ed=er.save(enquiry);
		return ed;
		
	}
	
	@GetMapping("/getdata/{id}")
	public EnquiryDetails getenquiry(@PathVariable("id") int id)
	{
		Optional<EnquiryDetails> opt=er.findById(id);
		EnquiryDetails l=opt.get();
		return l;
				
	}
	@GetMapping("/getalldata")
	public List<EnquiryDetails> getenquiry()
	{
		List<EnquiryDetails> list=er.findAll();
		return list;
				
	}
	
	@PutMapping("/updatedata/{id}")
	public EnquiryDetails updatedata(@RequestBody EnquiryDetails entity ,@PathVariable("id")int id)
	{   entity.setId(id);
	    EnquiryDetails ed=er.save(entity);
		return ed;
	}
	
}
