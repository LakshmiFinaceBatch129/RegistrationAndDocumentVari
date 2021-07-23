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


import com.fleeter.entities.inside.AccountHead;
import com.fleeter.repository.AccountHeadRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/accountHead")
public class AccountHeadController {
	
	
	@Autowired
	private AccountHeadRepository accountHeadRepository;
	
	@PostMapping("/")
	public AccountHead saveAccountHead(@RequestBody AccountHead accountHead)
	{
		accountHead.getUser().setRole("accountHead");
		return accountHeadRepository.save(accountHead);
	}
	
	@GetMapping("/")
	public List<AccountHead> getAllAccountHead()
	{
		return accountHeadRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public AccountHead getAccountHeadById(@PathVariable("id") int id)
	{
		return accountHeadRepository.findById(id).get();
	}
	
	@DeleteMapping("/{id}")
	public void deleteAccountHeadById(@PathVariable("id") int id)
	{
		accountHeadRepository.deleteById(id);
	}
	
	
	@PutMapping("/{id}")
	public AccountHead updateAccountHeadById(@RequestBody AccountHead accountHead,@PathVariable("id") int id)
	{
		accountHead.getUser().setId(id);
		return accountHeadRepository.save(accountHead);
	}


}
