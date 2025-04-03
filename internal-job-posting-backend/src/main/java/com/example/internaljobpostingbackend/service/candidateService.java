package com.example.internaljobpostingbackend.service;

import com.example.internaljobpostingbackend.model.Candidate;
import com.example.internaljobpostingbackend.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class candidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    public Candidate findByEmail(String email) {
        return candidateRepository.findByEmail(email);
    }

    public void saveCandidate(Candidate candidate) {
        candidateRepository.save(candidate);
    }

    public List<Candidate> listCandidates() {
        return candidateRepository.findAll();
    }
}
