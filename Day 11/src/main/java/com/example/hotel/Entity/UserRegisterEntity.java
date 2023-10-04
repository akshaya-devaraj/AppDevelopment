package com.example.hotel.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="userregister")
public class UserRegisterEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int UserRegisterId;
	private String Fullname;
	private Long Mobile;
	private String Email;
	private String Password;


}
