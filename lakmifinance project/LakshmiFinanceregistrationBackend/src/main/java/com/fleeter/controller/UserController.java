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

import com.fleeter.entities.customer.User;
import com.fleeter.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
	
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/")
	public User saveUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	@GetMapping("/")
	public List<User> getUser()
	{
		return userRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable("id") int id)
	{
		return userRepository.findById(id).get();
	}
	@GetMapping("/{username}/{password}")
	public User getUserById(@PathVariable("username") String username, @PathVariable("password") String password)
	{
		return userRepository.findByUsernameAndPassword(username, password);
	}
	
	@DeleteMapping("/{id}")
	public void deleteUserById(@PathVariable("id") int id)
	{
		 userRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public User updateOperationExecutiveById(@RequestBody User user,@PathVariable("id") int id)
	{
		user.setId(id);
		return userRepository.save(user);
	}

}
