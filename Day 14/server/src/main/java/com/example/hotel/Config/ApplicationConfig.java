package com.example.hotel.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.hotel.Repository.UserLoginRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
	private final UserLoginRepository userLoginRepository;
	
}
