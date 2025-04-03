package com.example.internaljobpostingbackend.repository;

import com.example.internaljobpostingbackend.model.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;


public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {



}
