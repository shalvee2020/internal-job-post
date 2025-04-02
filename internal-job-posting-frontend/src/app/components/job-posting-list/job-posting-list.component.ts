import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-posting-list.component.html',
  styleUrls: ['./job-posting-list.component.css']
})
export class JobPostingListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.fetchJobs();
  }

  fetchJobs() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    }, error => {
      console.error('Error fetching jobs:', error);
    });
  }
}
