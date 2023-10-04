package com.example.hotel.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;
import com.example.hotel.Entity.ReservationList;
import com.example.hotel.Service.ReservationListService;

@RestController
public class ReservationListController {
	@Autowired
	private ReservationListService reservationService;
	@GetMapping("/getlist")
	public List<ReservationList> getList()
	{
		return reservationService.getList();
	}
	
	@GetMapping("/getlist/{id}")
	public Optional<ReservationList> getListById(@PathVariable int id)
	{
		return reservationService.getListById(id);
	}
	@PostMapping("/postlist")
	public void postList(@RequestBody ReservationList rl)
	{
		reservationService.postList(rl);
	}

}
