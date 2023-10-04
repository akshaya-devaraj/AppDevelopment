package com.example.hotel.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.hotel.Repository.AdminLoginRepository;
import com.example.hotel.Entity.AdminLoginEntity;

@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepository AdminLoginrepository;
	public List<AdminLoginEntity> getAdminLogin(){
		return AdminLoginrepository.findAll();
	}
	public Optional<AdminLoginEntity> getAdminLoginbyId(int id){
		return AdminLoginrepository.findById(id);
	}
	public void postAdminLogin(AdminLoginEntity ale) {
		AdminLoginrepository.save(ale);
	}


}
