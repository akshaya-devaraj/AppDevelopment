package com.example.hotel.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotel.Entity.UserLogin;
import com.example.hotel.Service.LoginService;
import java.util.List;

@RestController
@RequestMapping
public class LoginController {
	@Autowired
	private LoginService loginservice;
	@PostMapping("/post")
	public void saveData(@RequestBody UserLogin le)
	{
		 loginservice.saveData(le);
	}
	@GetMapping("/get")
	public List<UserLogin> getUserLogin()
	{
		return loginservice.getUserLogin();
	}
	
	
          
}
