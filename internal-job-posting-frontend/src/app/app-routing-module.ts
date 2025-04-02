import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CandidateRegistrationComponent } from './components/registration/registration.component';
import { JobPostingListComponent } from './components/job-posting-list/job-posting-list.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { CandidateListComponent} from './components/candidate-list/candidate-list.component';


export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: CandidateRegistrationComponent },
  { path: 'job-posting-list', component: JobPostingListComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'create-job', component: CreateJobComponent },

  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

