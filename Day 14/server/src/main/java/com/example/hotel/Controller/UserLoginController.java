package com.example.hotel.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.hotel.Service.UserLoginService;
import com.example.hotel.Entity.UserLoginEntity;

@RestController
public class UserLoginController {
	@Autowired
	private UserLoginService UserLoginservice;
	@GetMapping("/getUserLogin")
	public List<UserLoginEntity> getUserLogin(){
		return UserLoginservice.getUserLogin();
	}
	@GetMapping("/getUserLogin/{id}")
	public Optional<UserLoginEntity> getUserLoginbyId(@PathVariable int id){
		return UserLoginservice.getUserLoginbyId(id);
	}

	@PostMapping("/postUserLogin")
	public void postUserLogin(@RequestBody UserLoginEntity ule)
	{
		UserLoginservice.postUserLogin(ule);
	}

}
