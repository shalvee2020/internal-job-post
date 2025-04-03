package com.example.internaljobpostingbackend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String department;
    private String location;
    private Double salary;
    private String experience;
    public JobPosting() {
    }

    public JobPosting(Long id, String title, String description, String department, String location, Double salary, String experience) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.department = department;
        this.salary = salary;
        this.location = location;
        this.experience = experience;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getDepartment() {
        return department;
    }

    public String getLocation() {
        return location;
    }

    public Double getSalary() {
        return salary;
    }

    public String getExperience() {
        return experience;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }
};
