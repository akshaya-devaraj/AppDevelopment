package com.example.hotel.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.hotel.Entity.ReservationList;
import com.example.hotel.Repository.ReservationRepository;

@Service
public class ReservationListService {
	@Autowired
	private ReservationRepository listRepo;
	public List<ReservationList> getList()
	{
		return listRepo.findAll();
	}
	public Optional<ReservationList> getListById(int id)
	{
	    return listRepo.findById(id);	
	}
	public void postList(ReservationList rl)
	{
		listRepo.save(rl);
	}
	

}
