package com.example.hotel.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotel.Entity.AdminLoginEntity;
import com.example.hotel.Service.AdminLoginService;
@RestController
public class AdminLoginController {
	@Autowired
	private AdminLoginService AdminLoginservice;
	@GetMapping("/getAdminLogin")
	public List<AdminLoginEntity> getAdminLogin(){
		return AdminLoginservice.getAdminLogin();
	}
	@GetMapping("/getAdminLogin/{id}")
	public Optional<AdminLoginEntity> getAdminLoginbyId(@PathVariable int id){
		return AdminLoginservice.getAdminLoginbyId(id);
	}
	@PostMapping("/postAdminLogin")
	public void postAdminLogin(@RequestBody AdminLoginEntity ale) {
		AdminLoginservice.postAdminLogin(ale);
	}

}
