package com.example.internaljobpostingbackend.controller;

import com.example.internaljobpostingbackend.model.Candidate;
import com.example.internaljobpostingbackend.repository.CandidateRepository;
import com.example.internaljobpostingbackend.service.candidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.POST, RequestMethod.GET})
public class CandidateController {
    @Autowired
    private candidateService candidateservice;

    @PostMapping
    public ResponseEntity<String> registerCandidate(@RequestBody Candidate candidate) {
        System.out.println(candidate);
        candidateservice.saveCandidate(candidate);
        return new ResponseEntity<>("Candidate registered successfully", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginCandidate(@RequestBody LoginRequest loginRequest) {
        Candidate candidate = candidateservice.findByEmail(loginRequest.getEmail());

        if (candidate != null && candidate.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }

    @GetMapping
    public List<Candidate> listCandidates() {
        return candidateservice.listCandidates();
    }
}

class LoginRequest {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
