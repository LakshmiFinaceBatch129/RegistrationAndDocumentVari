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


import com.fleeter.entities.inside.CreditManager;
import com.fleeter.repository.CreditManagerRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/creditManager")
public class CreditManagerController {
	
	
	@Autowired
	private CreditManagerRepository creditManagerRepository;
	
	@PostMapping("/")
	public CreditManager saveCreditManager(@RequestBody CreditManager creditManager)
	{
		creditManager.getUser().setRole("creditManager");
		return creditManagerRepository.save(creditManager);
	}
	
	@GetMapping("/")
	public List<CreditManager> getAllCreditManager()
	{
		return creditManagerRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public CreditManager getCreditManagerById(@PathVariable("id") int id)
	{
		return creditManagerRepository.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public void deleteCreditManagerById(@PathVariable("id") int id)
	{
		 creditManagerRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public CreditManager updateCreditManagerById(@RequestBody CreditManager creditManager,@PathVariable("id") int id)
	{
		creditManager.getUser().setId(id);
		return creditManagerRepository.save(creditManager);
	}

	
}
