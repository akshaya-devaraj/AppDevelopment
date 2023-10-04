package com.example.hotel.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.hotel.Entity.UserLogin;
import com.example.hotel.Repository.LoginRepository;

@Service
public class LoginService {
       @Autowired
       private LoginRepository loginRepo;
       public void saveData(UserLogin login)
       {
    	   loginRepo.save(login);
       }
      
       public List<UserLogin> getUserLogin()
       {
    	   return loginRepo.findAll();
       }
       
}
