package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.ContactUs;


@Service
public class ContactUsService {
	
	
	 @Autowired
	 private RestTemplate restTemplate;
	 public List<ContactUs> getAllFeedback() {
	        String url = "http://hotel-management/user/getfeedback"; 
	        List<ContactUs> feedbackList = restTemplate.getForObject(url, List.class);

	        return feedbackList;
	 }
	
}
