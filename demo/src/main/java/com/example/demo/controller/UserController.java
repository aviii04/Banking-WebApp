package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;  

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

import java.util.ArrayList;
import java.util.List;  

	
@RestController  
public class UserController {  
	
	@Autowired
	UserRepository repository;

	@GetMapping(value="/User",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll() {
		List<User> list = new ArrayList<>();
		Iterable<User> Users = repository.findAll();
		Users.forEach(list::add);
		return list;
		}
		
		@PostMapping(value="/registeration")
		public User postUser(@RequestBody User user) {
			System.out.println(user);
//			return user;

			repository.save (new User(user.getDate_of_birth(),user.getFirstName(), user.getGender(),user.getLastName(),user.getPassword(), user.getPhone(),user.getR_date(),user.getAadhar(), user.getEmail() ));
			return user;
		}

}	
