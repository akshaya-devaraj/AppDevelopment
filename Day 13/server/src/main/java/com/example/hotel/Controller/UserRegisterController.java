package com.example.hotel.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.hotel.Service.UserRegisterService;
import com.example.hotel.Entity.UserRegisterEntity;

@RestController
public class UserRegisterController {
	@Autowired
	private UserRegisterService userRegisterservice;
	@GetMapping("/getUserRegister")
	public List<UserRegisterEntity> getUserRegister(){
		return userRegisterservice.getUserRegister();
	}
	@GetMapping("/getUserRegister/{id}")
	public Optional<UserRegisterEntity> getUserRegisterbyId(@PathVariable int id){
		return userRegisterservice.getUserRegisterbyId(id);
	}
	@PostMapping("/postUserRegister")
	public void postUserRegister(@RequestBody UserRegisterEntity ure) {
		userRegisterservice.postUserRegister(ure);
	}
	@PutMapping("/putUserRegister/{id}")
	public void putUserRegister(@PathVariable int id,@RequestBody UserRegisterEntity ure)
	{
		ure.setUserRegisterId(id);
		userRegisterservice.putUserRegister(ure);
	}
	@DeleteMapping("/delUserRegister/{id}")
	public void deleteUserRegister(@PathVariable int id)
	{
		userRegisterservice.deleteUserRegister(id);
	}

}
