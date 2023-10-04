package com.example.hotel.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="list")
public class ReservationList {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int list_id;
	private String name;
	private String checkin;
	private String checkout;
	private int amount;
	private String paymentStatus;
	
	

}
