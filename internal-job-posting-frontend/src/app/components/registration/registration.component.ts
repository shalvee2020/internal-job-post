import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./registration.component.css']
})
export class CandidateRegistrationComponent {
  candidate: any = {
    name: '',
    email: '',
    password: '',
    experience: '',
    resume: '',
    remote: 'yes' // Default value
  };

  constructor(private candidateService: CandidateService) {}

  register() {
    if (!this.candidate.name || !this.candidate.email || !this.candidate.password || !this.candidate.experience || !this.candidate.resume) {
      alert('Please fill in all fields.');
      return;
    }

    this.candidateService.registerCandidate(this.candidate).subscribe({
      next: (response) => {
        alert('Registration successful!');
        console.log(response);
      },
      error: (error) => {
        alert('Registration failed. Please try again.');
        console.error(error);
      }
    });
  }
}
