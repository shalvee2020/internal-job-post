package com.example.internaljobpostingbackend.controller;

import com.example.internaljobpostingbackend.model.JobPosting;
import com.example.internaljobpostingbackend.repository.JobPostingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobpostings")
@CrossOrigin(origins = "*",allowedHeaders = "*",methods = {RequestMethod.POST,RequestMethod.GET})
public class JobPostingController {
    @Autowired
    private JobPostingRepository JobPostingRepository;



    @PostMapping
    public ResponseEntity<JobPosting> addJobPosting(@RequestBody JobPosting jobPosting) {
        return new ResponseEntity<>(JobPostingRepository.save(jobPosting), HttpStatus.CREATED);
    }

    @GetMapping
    public List<JobPosting> listJobPostings() {
        return JobPostingRepository.findAll();
    }
}