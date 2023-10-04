package com.example.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hotel.Entity.ReservationList;

@Repository
public interface ReservationRepository extends JpaRepository<ReservationList, Integer> {

}
