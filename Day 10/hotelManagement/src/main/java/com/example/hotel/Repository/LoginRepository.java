package com.example.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hotel.Entity.UserLogin;

@Repository
public class LoginRepository implements JpaRepository<UserLogin, String> {
         
}
