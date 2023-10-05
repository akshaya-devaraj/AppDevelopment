package com.example.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.Entity.UserRegisterEntity;

public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}