import { Component,OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit{
  protected readonly toast = toast;
  jobForm: FormGroup;
  

  constructor(private fb: FormBuilder,private jobService: JobService, private router: Router) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      experience: ['', [Validators.required, Validators.min(0)]],
      description:['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  Submit(): void {

    console.log(this.jobForm.value);
    
    if (this.jobForm.valid) {
      this.jobService.postJob(this.jobForm.value).subscribe(
        response => {
          console.log('Job posted successfully:', response);
          toast.success('Job created successfully!');
          this.router.navigate(['job-posting-list']); // Navigate to jobs listing page after submission
        },
        error => {
          console.error('Error posting job:', error);
          toast.error('Error creating job!');
        }
      );
    } else {
      toast.warning('Fill all the fields!');
      console.error('Form is invalid');
    }
  }

}