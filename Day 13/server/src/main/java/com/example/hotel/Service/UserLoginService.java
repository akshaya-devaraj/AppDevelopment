package com.example.hotel.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hotel.Entity.UserLoginEntity;
import com.example.hotel.Repository.UserLoginRepository;

@Service
public class UserLoginService {
	@Autowired
	private UserLoginRepository UserLoginrepository;
	public List<UserLoginEntity> getUserLogin(){
		return UserLoginrepository.findAll();
	}
	public Optional<UserLoginEntity> getUserLoginbyId(int id){
		return UserLoginrepository.findById(id);
	}
	public void postUserLogin(UserLoginEntity ulr) {
		UserLoginrepository.save(ulr);
	}
	
	

}
