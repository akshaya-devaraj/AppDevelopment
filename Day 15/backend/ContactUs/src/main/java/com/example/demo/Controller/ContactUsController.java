package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ContactUs;
import com.example.demo.service.ContactUsService;

@RestController
@RequestMapping("/contact")
public class ContactUsController {
	@Autowired
	private ContactUsService service;
	

	 @GetMapping("/getall")
	    public List<ContactUs> getFeedback() {
	        return service.getAllFeedback();
	    }

	

      
}