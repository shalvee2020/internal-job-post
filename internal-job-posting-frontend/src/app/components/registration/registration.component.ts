import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./registration.component.css']
})
export class CandidateRegistrationComponent {
  candidate: any = {
    name: '',
    email: '',
    password: '',
    experience: '',
    resumeurl: '',
    
  };

  constructor(private candidateService: CandidateService,private router: Router) {console.log(router.url);}

  register() {
    if (
      this.candidate.email === '' ||
  this.candidate.name === '' ||
  this.candidate.password === '' ||
  this.candidate.experience === '' ||
  this.candidate.resumeurl === ''
    ) {
      toast.warning('Fill all the fields');
      return;
    }

    

    this.candidateService
      .register(this.candidate.name,
        this.candidate.email,
        this.candidate.password,
        this.candidate.resumeurl,
        this.candidate.experience)
      .subscribe(
        (response: string) => {
          console.log('Registration successful');
          toast.success('Registered successfully');
          localStorage.setItem('userRole', 'user');
          this.router.navigate(['/job-posting-list']);
        },
        (error) => {
          toast.error('Registration Failed');
          console.error('Registration failed : ', error);
        }
      );
  }
}
