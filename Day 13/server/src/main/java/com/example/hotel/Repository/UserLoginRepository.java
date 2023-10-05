package com.example.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.Entity.UserLoginEntity;

public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}

