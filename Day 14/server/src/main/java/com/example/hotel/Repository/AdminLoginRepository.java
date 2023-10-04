package com.example.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.Entity.AdminLoginEntity;



public interface AdminLoginRepository extends JpaRepository<AdminLoginEntity,Integer> {



}