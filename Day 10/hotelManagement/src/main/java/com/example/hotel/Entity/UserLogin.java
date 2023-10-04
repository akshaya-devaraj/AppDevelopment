package com.example.hotel.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="Login")
@Getter
@Setter
public class UserLogin {
	@Id
	private String UserName;
	private String UserPassword;

}
