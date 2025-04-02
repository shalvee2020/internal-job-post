import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


  imports: [
    FormsModule
  ]
})
export class LoginComponent {
  user  :any = {
    email: '',
    password: ''
  };

  constructor(private candidateService: CandidateService, private router: Router) {}

  login() {


    this.candidateService.login(this.user).subscribe((res:any) => {

        if(res.result){
          alert('Login successful!');
          localStorage.setItem('token', JSON.stringify(res.data));
          this.router.navigate(['/Home']);
          alert('Login successful!');
        } else{

        alert('Invalid credentials. Please try again.');

      }

    })
  }
}
