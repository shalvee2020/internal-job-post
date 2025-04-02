import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-createjob',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
  job: any = {
    jobName: '',
    experience: '',
    jobDescription: ''
  };

  constructor(private jobService: JobService) {}

  postJob() {
    this.jobService.postJob(this.job).subscribe(() => {
      alert('Job posted successfully!');
    });
  }
}
