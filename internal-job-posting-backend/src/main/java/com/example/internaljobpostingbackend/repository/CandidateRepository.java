package com.example.internaljobpostingbackend.repository;

import com.example.internaljobpostingbackend.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    Candidate findByEmail(String email);

}