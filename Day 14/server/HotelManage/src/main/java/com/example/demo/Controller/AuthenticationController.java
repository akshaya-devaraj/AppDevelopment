package com.example.demo.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AuthenticationService;
import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<AuthenticationResponse> register(
		      @RequestBody RegisterRequest request
		  ) {
		    return ResponseEntity.ok(service.register(request));
		  }
		  @PostMapping("/authenticate")
		  public ResponseEntity<AuthenticationResponse> authenticate(
		      @RequestBody AuthenticationRequest request
		  ) {
		    return ResponseEntity.ok(service.authenticate(request));
		  }

}