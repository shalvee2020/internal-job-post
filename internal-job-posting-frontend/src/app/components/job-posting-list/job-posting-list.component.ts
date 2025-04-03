import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './job-posting-list.component.html',
  styleUrls: ['./job-posting-list.component.css']
})
export class JobPostingListComponent implements OnInit{ 
jobs: any[] = [];

  constructor(private jobservice: JobService) {}

  ngOnInit(): void {
    this.jobservice.getJobs().subscribe(response => {
      if (Array.isArray(response)) {
        this.jobs = response;
        console.log(this.jobs);
      } else {
        console.error('Expected an array but received:', response);
      }
    });
  }
}
